//引入http包
var http = require("http");
//引入文件操作包
var fs = require("fs");


//创建服务
var server = http.createServer();

var handleRequest = (req,res)=>{
	var url = req.url;
	if(url === "/"){
		fs.readFile("../index.html",(err,data)=>{
			if(err){
				throw err
			}
			res.end(data)
		})
	}else if(url.startsWith("/css")){
		var filePath = '../'+url;
		
		fs.readFile(filePath,(err,data)=>{
			if(err){
				throw err
			}
			res.writeHead("200",{
				"Content-Type":'text/css'
			})
			res.end(data)
		})
	}
}
//事件驱动
server.on('request',handleRequest)

//启动回调
server.listen("8080",()=>{
	console.log("Server is running at port 8080")
})
