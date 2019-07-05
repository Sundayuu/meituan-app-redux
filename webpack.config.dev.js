const path = require('path')
const fs = require('fs')
const HtmlWbpackPlugin = require('html-webpack-plugin')
const srcRoot = path.resolve(__dirname, 'src')
const devPath = path.resolve(__dirname, 'dev')
const pageDir = path.resolve(srcRoot, 'page')
const mainFile = 'index.js'
const webpack = require('webpack')

function getHtmlArray() {
  let htmlArray = []
  Object.keys(entryMap).forEach(key => {
    let fullPathName = path.resolve(pageDir, key)
    let fileName = path.resolve(fullPathName, key + '.html')
    if (fs.existsSync(fileName)) {
      htmlArray.push(
        new HtmlWbpackPlugin({
          filename: key + '.html',
          template: fileName,
          chunks: [key]
        })
      )
    }
  })
  return htmlArray
}

function getEntry() {
  let entryMap = {}
  // 同步去寻找dir下路径
  fs.readdirSync(pageDir).forEach(pathname => {
    let fullPathName = path.resolve(pageDir, pathname)
    // 判断fullPathName是路径还是文件
    let stat = fs.statSync(fullPathName)
    let fileName = path.resolve(fullPathName, mainFile)
    if (stat.isDirectory() && fs.existsSync(fileName)) {
      entryMap[pathname] = fileName
    }
  })
  return entryMap
}
const entryMap = getEntry()
const htmlArray = getHtmlArray()
module.exports = {
  mode: 'development',
  entry: entryMap,
  output: {
    path: devPath,
    filename: '[name].min.js'
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss'],
    alias: {
      '@static': path.resolve(__dirname, 'src/static'),
      '@component': path.resolve(__dirname, 'src/component')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader'
          }
          // {
          //   loader: 'eslint-loader'
          // }
        ],
        include: srcRoot
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: srcRoot
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader' // 将 JS 字符串生成为 style 节点
          },
          {
            loader: 'css-loader' // 将 CSS 转化成 CommonJS 模块
          },
          {
            loader: 'sass-loader' // 将 Sass 编译成 CSS
          }
        ],
        include: srcRoot
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ],
        include: srcRoot
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ].concat(htmlArray),
  devServer: {
    contentBase: devPath,
    host: '127.0.0.1',
    compress: true, //服务器压缩
    port: 1717,
    hot: true
  }
}
