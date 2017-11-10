module.exports = function(source){
	var styleReg = /(.+)\{([\s\s]+)\}/;
	var style = document.createElement('style');
    var box= document.createTextNode(source); //IE6-8不支持
    style.type = 'text/css';
    style.appendChild(box);
    document.getElementsByTagName('head')[0].appendChild(style);
}