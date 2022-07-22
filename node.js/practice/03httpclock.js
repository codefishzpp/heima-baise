// 引入模块
const fs = require('fs')
const path = require('path')
const http = require('http')
// 创建 web 服务器实例
const server = http.createServer()
server.on('request', function (req, res) {
    const url = req.url

    // const fpath = path.join(__dirname, url)//资源请求地址，映射为存放路径
    // let fpath = ''
    // if (url === '/') {//请求路径是/,手动修改路径
    const fpath = path.join(__dirname, './practice/pathTime.html')
    // }    
    // else {
    //     //路径不是/ ，动态路径
    //     fpath = path.join(__dirname, url)
    // }
    // 读取“映射过来的文件内容
    fs.readFile(fpath, 'utf8', (err, data) => {
        if (err) {
            console.log(req.url);
            // console.log(url);
            // console.log(fpath);
            return res.end("404 Not Fount")
        }
        console.log("111");
        // res.setHeader('Content-Type', 'text/html ; charset=utf-8')
        // res.end(data)
    })

})
// 启动服务器
server.listen('8080', () => {
    console.log('server running at http://127.0.0.1:8080')
})

///////////////////////////////////////////////url有问题/index.html     /favicon.ico