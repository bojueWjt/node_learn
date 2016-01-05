var dns = require('dns');

dns.lookup("www.github.com",function lookup(err,address,family){

	console.log("ip 地址:",address);
	dns.reverse(address,function(err,hostname){
	if(err){
		console.log(err.stack);
	}

	console.log("反向解析" + address + ":" + JSON.stringify(hostname));

});
});
