import cli from './utils/commander.js'
let argv = cli(['asa', '--foo', 'bar', '--baz', 'qux', '-a', 'ssss'])
console.log(argv)
