var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/index.html",function(req ,res) {

	res.sendFile(__dirname + "/" + "form.html");
	console.log(__dirname);

});


app.get("/process_get",function(req,res) {

	response = {

		first_name:req.query.first_name,
		last_name:req.query.last_name
	};

	console.log(response);
	res.end(JSON.stringify(response));
});

var server = app.listen(8081,function(){

	var host = server.address().address;

	var port = server.address().port;

	console.log("应用实例，访问的地址为http://%s:%s",host,port);

});