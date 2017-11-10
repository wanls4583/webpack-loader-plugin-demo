var fs = require('fs');
function MyHtmlPlugin(options) {
  // 根据 options 配置你的插件
}

MyHtmlPlugin.prototype.apply = function(compiler) {
  compiler.plugin("emit", function(compilation, callback) {
    console.log("The compilation is going to emit files...");
    var context = compiler.context;
    var html = `
        <!DOCTYPE html>
        <html>
        <head>
          <title>webpack test1</title>
        </head>
        <body>
          <script type="text/javascript" src="${compiler.options.output.filename}"></script>
        </body>
        </html>`;
    fs.writeFile(context+'/'+'index.html', html);
    callback();
  });
};

module.exports = MyHtmlPlugin;