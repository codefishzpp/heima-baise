// 引入http模块
const http = require('http')
// 创建 web 服务器实例
const server = http.createServer()
// 为服务器实例绑定 request 事件，监听客户端的请求
server.on('request', function (req, res) {
    const url = req.url//1.获取url
    let content = '<h1>404 Not found!</h1>'//2.设置默认响应内容404 Not found!
    if (url === '/' || url === '/index.html') {//3.判断请求的是否是/ 或/index.html首页
        content = '<h1>首页</h1>'
    }
    else if (url === '/about.html') {//4.判断请求的是否是/about.html关于页面
        content = '<h1>关于页面</h1>'
    }
    res.setHeader('Content-Type', 'text/html; charset=utf-8')//5.Content-Type响应头，防止中问乱码
    res.end(content)            //6.使用res.end()把内容响应给客户端
})
//  启动服务器
server.listen(8080, function () {
    console.log('server running at http://127.0.0.1:8080')
})