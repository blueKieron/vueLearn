const path = require('path')
const VueLoaderPlugin=require('vue-loader/lib/plugin')

module.exports = {
  entry: path.join(__dirname, '.src/main.js'),
  output: {
    //动态获取路径
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath:'dist/'
  },
  module: {
    rules: [
      //css-loader只负责加载
      //style-loader负责将样式添加到DOM中
      //使用多个loader时，是从右向左
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              //当加载的图片，小于limit时，会将图片编译成base64字符串形式
              //当加载的图片，大于limit时，会使用file-loader
              limit: 8430,
              name:'/img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test:/\.vue$/,
        use:['vue-loader']
      }
    ]
  }
}