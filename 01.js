/* 
    http模块是由Node。js提供用来创建web服务器的模块
    服务器概念：
    IP地址：计算机的唯一地址 ，通常采用点分十进制，例如 192.168.1.1 (a.b.c.d)都是0~255之间的数字
    域名地址：字符型的地址
    域名服务器就是提供IP地址和域名之间的转换服务的服务器
    端口号：标识每一个web服务
    */
    /* 
        创建web服务器的步骤:
        1导入http模块
        2创建web服务器实例
        3为服务器实例绑定request事件，监听客户端的请求
        4启动服务器
    */
    const http=require('http');
    //创建web服务器实例
    const server=http.createServer();
    //为服务器实例绑定request事件，监听客户端的请求
    server.on('request',(req,res)=>{
        console.log('Someone visit our server');
        //req:请求对象包含了与客户端相关的数据和属性
    })
    //启动服务器
    server.listen(80,function(){
        console.log('server running  at http://127.0.0.1');
    })