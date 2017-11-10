var path = require("path");
var myHtmlPlugin = require('./custom_modules/my-html-plugin');
module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'index.bundle.js'
  },
  resolve: {
    modules: ["custom_modules", "node_modules"]
  },
  resolveLoader: {
    modules: [ "custom_loaders", "node_modules"]
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "my-style-loader!my-trim-loader" }
    ]
  },
  plugins: [
    new myHtmlPlugin()
  ]
};