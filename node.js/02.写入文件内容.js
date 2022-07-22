// 1.导入fs模块
const fs = require('fs')

// 2.调用fs.fs.writeFile()方法读取文件
fs.writeFile('./files/1.txt', '22', 'utf-8', function (err) {
    // 如果成功，err值为null
    // 如何失败，err值为错误对象
    // console.log(err);
    // 3.判断文件是否写入成功 
    if (err) {
        console.log("读取错误" + err.message);
    }
    console.log("读取成功");
})

