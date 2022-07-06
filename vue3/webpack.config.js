const path = require('path')
module.exports = {
    // mode指定构建模式，可选值有development和production
    mode: 'development',
    // 指定 打包的入口
    entry: path.join(__dirname, './src/index.js'),
    // 指定打包的出口
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js',
    }
}

// 1.导入HTML插件，得到以恶搞构造函数s
const HtmlPlugin = require('html-webpack-plugin')
// 创建html插件的实例对象
const htmlPlugin = new HtmlPlugin({
    template: "./src/index.html",//指定源文件的存放路径
    filename: "./index.html"//指定生成的问价的存放路径
})

module.exports = {
    mode: 'development',
    plugins: [htmlPlugin],//3.通过plugins节点，使htmlPlugin插件生效
    devServer: {
        open: true,
        host: '127.0.0.1',
        port: 80,
    },
    module: {//所有第三方模块的匹配规则
        rules: [//文件后缀名的匹配规则
            {
                test: /\.css$/, use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.jpg|png|gif$/, use: ['url-loader?limit=22229']
                // test: /\.jpg|png|gif$/,
                //  use: {
                //     loader:'url-loader',
                //     options:{
                //         limit:22228
                //     }
                // }
            },
            {
                test: /\.js$/,
                //exclude为排除项
                //表示babel-loader只需处理开发者编写的js文件,不需要处理node_modules下的js文件
                exclude:/node_modules/,
                 use: {
                    loader:'babel-loader',
                    options:{//参数项
                        //声明一个babel插件,此插件用来转化class中的高级语法
                        plugins:['@babel/plugin-proposal-class-properties']
                    }
                }
            },


        ]

    }
}