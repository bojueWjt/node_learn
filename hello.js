var hello = function(){

	var name;

	this.setName = function(thyname){

		name = thyname;

	};

	this.sayHello = function(){

		console.log(name + " hello world!");

	}

};

module.exports = hello;


