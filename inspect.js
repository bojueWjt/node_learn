var util = require("util");

function Ninico(){

	this.name = "ninico";
	this.toString = function(){

		console.log(this.name);

	}
}

var obj = new Ninico();

console.log(util.inspect(obj));
console.log(util.inspect(obj,true));
console.log(util.inspect(obj,true,true,true));


