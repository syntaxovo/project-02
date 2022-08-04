const http=require('http');
/*  
    let与const都是只在声明所在的块级作用域内有效。
     let声明的变量可以改变，值和类型都可以改变，没有限制。
     const 声明的变量不得改变值，这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值
*/
const server=http.createServer();
server.on('request',(req,res)=>{
    const url=req.url;
    //设置默认响应内容为 404 Not Found
    let Content ='404 Not Found';
    if(url==='/'||url==='/index.html'){
        Content='<h1>首页</h1>'
    }else if(url==='/about.html'){
        Content='<h1>关于页面</h1>'
    }
    //设置 content-type响应头
    res.setHeader('Content-Type','text/html; charset= utf-8');
    res.end(Content);
})
server.listen(80,()=>{
    console.log('server running at http://127.0.0.1');
})