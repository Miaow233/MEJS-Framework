import CAC from './CAC.js'
import Option, { OptionConfig } from './Option.js'
import {
  removeBrackets,
  findAllBrackets,
  findLongest,
  padRight,
  CACError,
} from './utils.js'

interface CommandArg {
  required: boolean
  value: string
  variadic: boolean
}

interface HelpSection {
  title?: string
  body: string
}

interface CommandConfig {
  allowUnknownOptions?: boolean
  ignoreOptionDefaultValue?: boolean
}

type HelpCallback = (sections: HelpSection[]) => void | HelpSection[]

type CommandExample = ((bin: string) => string) | string

class Command {
  options: Option[]
  aliasNames: string[]
  /* Parsed command name */
  name: string
  args: CommandArg[]
  commandAction?: (...args: any[]) => any
  usageText?: string
  versionNumber?: string
  examples: CommandExample[]
  helpCallback?: HelpCallback
  globalCommand?: GlobalCommand

  constructor(
    public rawName: string,
    public description: string,
    public config: CommandConfig = {},
    public cli: CAC
  ) {
    this.options = []
    this.aliasNames = []
    this.name = removeBrackets(rawName)
    this.args = findAllBrackets(rawName)
    this.examples = []
  }

  usage(text: string) {
    this.usageText = text
    return this
  }

  allowUnknownOptions() {
    this.config.allowUnknownOptions = true
    return this
  }

  ignoreOptionDefaultValue() {
    this.config.ignoreOptionDefaultValue = true
    return this
  }

  version(version: string, customFlags = '-v, --version') {
    this.versionNumber = version
    this.option(customFlags, 'Display version number')
    return this
  }

  example(example: CommandExample) {
    this.examples.push(example)
    return this
  }

  /**
   * Add a option for this command
   * @param rawName Raw option name(s)
   * @param description Option description
   * @param config Option config
   */
  option(rawName: string, description: string, config?: OptionConfig) {
    const option = new Option(rawName, description, config)
    this.options.push(option)
    return this
  }

  alias(name: string) {
    this.aliasNames.push(name)
    return this
  }

  action(callback: (...args: any[]) => any) {
    this.commandAction = callback
    return this
  }

  /**
   * Check if a command name is matched by this command
   * @param name Command name
   */
  isMatched(name: string) {
    return this.name === name || this.aliasNames.includes(name)
  }

  get isDefaultCommand() {
    return this.name === '' || this.aliasNames.includes('!')
  }

  get isGlobalCommand(): boolean {
    return this instanceof GlobalCommand
  }

  /**
   * Check if an option is registered in this command
   * @param name Option name
   */
  hasOption(name: string) {
    name = name.split('.')[0]
    return this.options.find((option) => {
      return option.names.includes(name)
    })
  }

  outputHelp(): string {
    const { name, commands } = this.cli
    const {
      versionNumber,
      options: globalOptions,
      helpCallback,
    } = this.cli.globalCommand

    let sections: HelpSection[] = [
      {
        body: `${name}${versionNumber ? `/${versionNumber}` : ''}`,
      },
    ]

    sections.push({
      title: '用法',
      body: `  $ ${name} ${this.usageText || this.rawName}`,
    })

    const showCommands =
      (this.isGlobalCommand || this.isDefaultCommand) && commands.length > 0

    if (showCommands) {
      const longestCommandName = findLongest(
        commands.map((command) => command.rawName)
      )
      sections.push({
        title: '指令',
        body: commands
          .map((command) => {
            return `  ${padRight(
              command.rawName,
              longestCommandName.length
            )}  ${command.description}`
          })
          .join('\n'),
      })
      sections.push({
        title: `获取更多信息，请添加 \`--help\` 标签`,
        body: commands
          .map(
            (command) =>
              `  $ ${name}${
                command.name === '' ? '' : ` ${command.name}`
              } --help`
          )
          .join('\n'),
      })
    }

    let options = this.isGlobalCommand
      ? globalOptions
      : [...this.options, ...(globalOptions || [])]
    if (!this.isGlobalCommand && !this.isDefaultCommand) {
      options = options.filter((option) => option.name !== 'version')
    }
    if (options.length > 0) {
      const longestOptionName = findLongest(
        options.map((option) => option.rawName)
      )
      sections.push({
        title: '可选参数',
        body: options
          .map((option) => {
            return `  ${padRight(option.rawName, longestOptionName.length)}  ${
              option.description
            } ${
              option.config.default === undefined
                ? ''
                : `(默认值: ${option.config.default})`
            }`
          })
          .join('\n'),
      })
    }

    if (this.examples.length > 0) {
      sections.push({
        title: '示例',
        body: this.examples
          .map((example) => {
            if (typeof example === 'function') {
              return example(name)
            }
            return example
          })
          .join('\n'),
      })
    }

    if (helpCallback) {
      sections = helpCallback(sections) || sections
    }

    let helpMsg = sections
        .map((section) => {
          return section.title
            ? `${section.title}:\n${section.body}`
            : section.body
        })
        .join('\n\n')
    console.log(helpMsg)
    return helpMsg
  }

  outputVersion() {
    const { name } = this.cli
    const { versionNumber } = this.cli.globalCommand
    if (versionNumber) {
      console.log(`${name}/${versionNumber}`)
    }
  }

  checkRequiredArgs() {
    const minimalArgsCount = this.args.filter((arg) => arg.required).length

    if (this.cli.args.length < minimalArgsCount) {
      throw new CACError(
        `缺少必要参数 \`${this.rawName}\``
      )
    }
  }

  /**
   * Check if the parsed options contain any unknown options
   *
   * Exit and output error when true
   */
  checkUnknownOptions() {
    const { options, globalCommand } = this.cli

    if (!this.config.allowUnknownOptions) {
      for (const name of Object.keys(options)) {
        if (
          name !== '--' &&
          !this.hasOption(name) &&
          !globalCommand.hasOption(name)
        ) {
          throw new CACError(
            `未知选项 \`${name.length > 1 ? `--${name}` : `-${name}`}\``
          )
        }
      }
    }
  }

  /**
   * Check if the required string-type options exist
   */
  checkOptionValue() {
    const { options: parsedOptions, globalCommand } = this.cli
    const options = [...globalCommand.options, ...this.options]
    for (const option of options) {
      const value = parsedOptions[option.name.split('.')[0]]
      // Check required option value
      if (option.required) {
        const hasNegated = options.some(
          (o) => o.negated && o.names.includes(option.name)
        )
        if (value === true || (value === false && !hasNegated)) {
          throw new CACError(`缺少参数 \`${option.rawName}\``)
        }
      }
    }
  }
}

class GlobalCommand extends Command {
  constructor(cli: CAC) {
    super('@@global@@', '', {}, cli)
  }
}

export type { HelpCallback, CommandExample, CommandConfig }

export { GlobalCommand }

export default Command
