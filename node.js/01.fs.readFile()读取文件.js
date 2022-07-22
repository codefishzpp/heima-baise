// 1.导入fs模块
const fs = require('fs')

// 2.调用fs.fs.readFile()方法读取文件
fs.readFile('./files/1.txt', 'utf-8', function (err, data) {
    // 打印失败结果
    // 如果成功，err值为null
    // 如何失败，err值为错误对象，data值为undefined
    console.log(err);
    console.log('-----------------');
    console.log(data);
})

// 3.判断文件是否读取成功
fs.readFile('./files/1.txt', function (err, data) {
    if (err) {
        console.log("读取错误" + err.message);
    }
    console.log("读取成功" + data);
});


