var loaderUtils = require("loader-utils");
var path = require("path");
module.exports = function(source){
	// return 'require('+loaderUtils.stringifyRequest(this,path.resolve(__dirname,'./add-style'))+')('+source+');'
}
module.exports.pitch = function(request){
	return `var source = require(${loaderUtils.stringifyRequest(this,'!'+request)});
			var addStyle = require(${loaderUtils.stringifyRequest(this,path.resolve(__dirname,'./add-style'))});
			addStyle(source)`
}
