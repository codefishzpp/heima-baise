// 1.导入
const path = require('path')
const fs = require('fs')

// 1.1.匹配
// 匹配<style>规则
// \s表示空白字符  \S表示非空白字符  *表示匹配任意次
const regStyle = /<style>([\s\S]*)<\/style>/

// 匹配<script>规则
const regScript = /<script>[\s\S]*<\/script>/

// 2.1调用方法读取html
fs.readFile(path.join(__dirname, '../practice/pathTime.html'), 'utf8', function (err, data) {
    if (err) {
        return console.log("读取失败 " + err.message);
    }
    // 成功，调用对应的三个方法 ，分别拆解css,js,html
    resolveCSS(data)
    resolveJS(data)
    resolveHTML(data)
})

// 3.1 css
function resolveCSS(htmlData) {
    // 使用正则提取需要的内容
    const r1 = regStyle.exec(htmlData)
    //将提取出来的样式字符串 ，进一步处理，
    // 语法:var result1 = regexp.exec(str);
    // regexp: 正则表达式（可以直接定义也可以利用RegExp的方式定义） str: 要匹配的字串
    // exec与match的关联就是exec(g有没有都无影响)就等价于不含有g全局标志的match.即返回数组arr[0]为匹配的完整串.其余的为括号里捕获的字符串（当含有子匹配时）.
    // @ts-ignore
    const newCSS = r1[0].replace('<style>', '').replace('</style>', '')
    // 将提取出来的样式字符串，做进一步的处理
    fs.writeFile(path.join(__dirname, '../practice/pathTime2.css'), newCSS, 'utf-8', function (err) {
        if (err) {
            return console.log("写入CSS样式失败!" + err.message);
        }
        console.log("写入CSS样式成功!");
    })
}
// 3.2 js
function resolveJS(htmlData) {
    // 使用正则提取需要的内容
    const r2 = regScript.exec(htmlData)
    //将提取出来的样式字符串 ，进一步处理，
    // 语法:var result1 = regexp.exec(str);
    // regexp: 正则表达式（可以直接定义也可以利用RegExp的方式定义） str: 要匹配的字串
    // exec与match的关联就是exec(g有没有都无影响)就等价于不含有g全局标志的match.即返回数组arr[0]为匹配的完整串.其余的为括号里捕获的字符串（当含有子匹配时）.
    // @ts-ignore
    const newJS = r2[0].replace('<script>', '').replace('</script>', '')
    // 将提取出来的样式字符串，做进一步的处理
    fs.writeFile(path.join(__dirname, '../practice/pathTime2.js'), newJS, 'utf-8', function (err) {
        if (err) {
            return console.log("写入JS脚本失败!" + err.message);
        }
        console.log("写入JS脚本成功!");
    })
}
// 3.3 html
function resolveHTML(htmlData) {
    // 使用正则提取需要的内容
    // const r2 = regHtml.exec(htmlData)
    //将提取出来的样式字符串 ，进一步处理，
    // 语法:var result1 = regexp.exec(str);
    // regexp: 正则表达式（可以直接定义也可以利用RegExp的方式定义） str: 要匹配的字串
    // exec与match的关联就是exec(g有没有都无影响)就等价于不含有g全局标志的match.即返回数组arr[0]为匹配的完整串.其余的为括号里捕获的字符串（当含有子匹配时）.
    // @ts-ignore
    const newHTML = htmlData
        .replace('regStyle', '<link rel="stylesheet" href="./pathTime2.css">')
        .replace('regScript', '<link rel="stylesheet" href="./pathTime.js">')
    // 将提取出来的样式字符串，做进一步的处理
    fs.writeFile(path.join(__dirname, '../practice/pathTime2.html'), newHTML, 'utf-8', function (err) {
        if (err) {
            return console.log("写入HTML文件失败!" + err.message);
        }
        console.log("写入HTML文件成功!");
    })
}
