var EventEmitter = require("events").EventEmitter;
var domain = require("domain");

var emitter1 = new EventEmitter();


//创建域
var domain1 = domain.create();

domain1.on("error",function(err){
	console.log("domain1 处理这个错误 (" + err.message+")");
});

domain1.add(emitter1);

emitter1.on("error",function(err){
	console.log("监听器处理此错误(" + err.message+")");
});

emitter1.emit("error",new Error("通过监听器来处理"));

emitter1.removeAllListeners("error");


emitter1.emit("error",new Error("通过domain1 处理"));

var domain2 = domain.create();

domain2.on("error",function(err){

	console.log("domain2 处理这个错误(" + err.message + ")");
});

//隐式绑定
domain2.run(function(){
	var emitter2 = new EventEmitter();
	emitter2.emit("error",new Error("通过domain2处理"));
});


