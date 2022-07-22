const fs = require('fs')
fs.readFile('./fsText.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err.message);
    }
    // console.log(data);                          
    // 先把成绩数据按照空格分布
    var arr = data.split(' ');
    // = 改为 :
    var arrNew = [];
    arr.forEach(item => {
        arrNew.push(item.replace("=", ":"))
    });
    // 回车\r 换行\n
    const newArr = arrNew.join('\r\n');
    // 写入
    fs.writeFile('./fsText.txt', newArr, 'utf-8', (err) => {
    })

})
