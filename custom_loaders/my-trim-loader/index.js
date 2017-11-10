//处理换行符
module.exports = function(source){
	// return source.replace(/\r\n|\r|\n/g,'');
	return 'module.exports="'+source.replace(/\r\n|\r|\n/g,'')+'"';
}
