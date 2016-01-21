var mongodb = require("mongodb");

var mongodbServer = new mongodb.Server("localhost",27017,{
	auto_reconnect:true,
	poolSize:10
});

var db = new mongodb.Db("mydb",mongodbServer);


db.open(function(){

	db.collection("contact",function(err,collection){

		collection.insert({
			name:"Ninico",
			email:"jiataoTX@163.com"
		},function(err,data){

			if(err){

				console.log(err);
			}

			if(data){

				console.log("Successfully Insert");
			}else{

				console.log("Failed to Insert");
			}
		});

		collection.find({name:"Ninico"}).toArray(function(err,data){

			if(err){

				console.log(err);
			}

			if(data){

				console.log(data);
			}else{

				console.log("Cannot found");
			}
		})
	});
});