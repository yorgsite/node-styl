

var _tags={
	//--- styles ---
	'bold': ['\x1B[1m', '\x1B[22m'],
	'italic': ['\x1B[3m', '\x1B[23m'],
	'underline': ['\x1B[4m', '\x1B[24m'],
	'inverse': ['\x1B[7m', '\x1B[27m'],
	'strikethrough': ['\x1B[9m', '\x1B[29m'],
	//--- text colors ---
	//grayscale
	'white': ['\x1B[37m', '\x1B[39m'],
	'grey': ['\x1B[90m', '\x1B[39m'],
	'black': ['\x1B[30m', '\x1B[39m'],
	//others
	'blue': ['\x1B[34m', '\x1B[39m'],
	'cyan': ['\x1B[36m', '\x1B[39m'],
	'green': ['\x1B[32m', '\x1B[39m'],
	'magenta': ['\x1B[35m', '\x1B[39m'],
	'red': ['\x1B[31m', '\x1B[39m'],
	'yellow': ['\x1B[33m', '\x1B[39m'],
	//--- background colors ---
	//grayscale
	'whiteBG': ['\x1B[47m', '\x1B[49m'],
	'greyBG': ['\x1B[49;5;8m', '\x1B[49m'],
	'blackBG': ['\x1B[40m', '\x1B[49m'],
	//others
	'blueBG': ['\x1B[44m', '\x1B[49m'],
	'cyanBG': ['\x1B[46m', '\x1B[49m'],
	'greenBG': ['\x1B[42m', '\x1B[49m'],
	'magentaBG': ['\x1B[45m', '\x1B[49m'],
	'redBG': ['\x1B[41m', '\x1B[49m'],
	'yellowBG': ['\x1B[43m', '\x1B[49m']
};

var styl=function(text){
	var pile=[];
	var _interface=new function(){
		var scope		= this;
		this.toString	= function(){
			let txt=text||"";
			pile.map(d=>txt=_tags[d][0]+txt+_tags[d][1]);
			return txt;
		};
		this.text		= function(txt){
			text=txt;
			return scope;
		};
		Object.defineProperty(scope,"names",{
			get:function(){return Object.keys(_tags)}
		});
	}();
	for(var i in _tags){
		(function(tag){
			Object.defineProperty(_interface,tag,{
				get:function(){
					pile.push(tag);
					return _interface;
				}
			});
		})(i);
	}
	return _interface;
};
styl.none		= function(txt){
	return txt.split(/\x1B\[[0-9;]*m/).join('');
};


module.exports = styl;
