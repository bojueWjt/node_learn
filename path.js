var path = require("path");

console.log("normalization :" + path.normalize("/test/test1//2slashes/lslash/tabl/.."));

console.log("joint path :" + path.join("/test","test1","2slashes/lslash","tab",".."));

//转换为绝对路径

console.log("resolve :" + path.resolve("path.js"));


//路径中的文件的后缀名

console.log("ext.name:" + path.extname("path.js")); 
