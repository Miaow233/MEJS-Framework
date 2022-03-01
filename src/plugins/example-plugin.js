let example_plugin = {
  info: {
    name: 'example-plugin',
    version: '0.1',
    description: 'A plugin example',
    author: '',
    help: '',
  },
  enable: true,
  action: function (session) {
    console.log('Hello World!')
  },
}
export default example_plugin
