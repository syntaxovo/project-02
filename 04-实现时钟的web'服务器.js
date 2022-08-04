/* 
    1  导入需要的模块
    2  创建基本的web服务器
    3  将资源的请求url地址映射为文件的存放路径
    4  读取文件内容响应给客户端
    5  优化资源的请求路径
*/
//导入模块
 const fs=require('fs');
 const path=require('path');
 const http=require('http');
//创建基本的web服务器
    const server=http.createServer();
    server.on('request',(req,res)=>{
        // 将资源的请求url地址映射为文件的存放路径
        const url=req.url;
        //获取客户端请求的url地址
        /* 
            /clock/index.html
            /clocl/index.css
            /clock/idnex.js
        */
       // const fpath=path.join(__dirname,url);
        //优化资源的请求路径
        let fpath='';
        if(url==='/'){
            fpath=path.join(__dirname,'./clock/index.html')
        }else{
            fpath=path.join(__dirname,'./clock',url)
        }
        // 读取文件内容响应给客户端
        fs.readFile(fpath,'utf-8',(err,dataStr)=>{
            if(err){
                return  res.end('404 Not Found');
            }
                res.end(dataStr)
        })
    })
    server.listen(80,()=>{
        console.log('server running at http://127.0.0.1');
    })