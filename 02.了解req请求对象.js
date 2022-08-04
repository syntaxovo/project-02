// 1导入http模块
    const http=require('http')
// 2创建web服务器实例
    const server=http.createServer();
// 3为服务器实例绑定request事件，监听客户端的请求
server.on("request",(req,res)=>{
    //req是请求对象，包含了与客户端相关的数据和属性
    //res 响应对象
    //req.url 客户端的请求地址
    const url=req.url
    //req.method 客户端的请求类型
    const method=req.method
    
   // const str="Your request url is ${url},and request method is ${method}";
   //const str = `Your request url is ${url}, and request method is ${method}`
    const str=`您请求的url地址是${req.url},请求的类型是${req.method}`
   
    //调用res.end()，向客户端响应一些内容，
    //为了防止中文乱码问题，需要设置响应头
    res.setHeader('Content-Type','text/html;charset=utf-8')
    res.end(str);
})
// 4启动服务器
    server.listen(80,()=>{
        console.log('server running at http://127.0.0.1');
    })