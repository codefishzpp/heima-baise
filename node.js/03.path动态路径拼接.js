const path = require('path')
const fs = require('fs')
// 注意 ../抵消前面一个路径
const pathstr = path.join('/a', '/bc', '../', '/d', '/e ')//\a\d\e
const pathstr2 = path.join(__dirname, './files/1.txt') //D:\2study\practice-add\node.js\files\1.txt
console.log(pathstr);
console.log(pathstr2);

//1. path.join()路径拼接
fs.readFile(path.join(__dirname, './files/1.txt'), 'utf8', function (err, data) {
    if (err) {
        return console.log(err.message)
    }
    console.log(data)
})


//2. path.basename()定义文件的存放路径
const fpath = '/a/b/c/index.html'

const fullName = path.basename(fpath)
console.log(fullName) // index.html

const nameWithoutExt = path.basename(fpath, '.html')
console.log(nameWithoutExt) // index

// 3.path.extname()获取路径中文件扩展名
const ffpath = '/a/b/c/index.html'

const fext = path.extname(ffpath)
console.log(fext) // .html