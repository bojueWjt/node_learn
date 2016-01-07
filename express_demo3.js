var express = require("express");
var app = express();


app.use(express.static("public/img"));

app.get("/",function(req,res){

	res.send("Hello World");

});


var server = app.listen(8081,function() {

	var host = server.address().address;
	var port = server.address().port;

	console.log("应用实例，访问的地址为http://%s:%s",host,port);

});
