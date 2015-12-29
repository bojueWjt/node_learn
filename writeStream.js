var fs = require("fs");

var data = "深圳梦马网络科技有限公司    以梦为马";

var writerStream = fs.createWriteStream("output.txt");

writerStream.write(data,"UTF8");

writerStream.end();


writerStream.on("finish",function(){

	console.log("写入完成！");

});


writerStream.on("error",function(error){

	console.log(errpr.stack);

});

console.log("程序执行结束");
