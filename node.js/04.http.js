// 1.引入http模块
const http = require('http')

// 2.创建 web 服务器实例
const server = http.createServer()

//  3.为服务器实例绑定 request 事件，监听客户端的请求
server.on('request', function (req, res) {
    // req发送
    // req.url客户端请求的url地址
    const url = req.url
    //  req.method客户端请求的method地址
    const method = req.method
    const str = `你好啊Your request url is ${url}, and request method is ${method}`
    console.log(str)
    // res响应

    // 设置 Content-Type 响应头，解决中文乱码的问题
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    // res.end()调用向客户端响应内容
    res.end(str)
})

//4. 启动服务器
server.listen(80, function () {
    console.log('server running at http://127.0.0.1')
})