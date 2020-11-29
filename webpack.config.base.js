const webpack = require('webpack')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const env = process.env.NODE_ENV

process.traceDeprecation = true
process.noDeprecation = true

let webpackConfig = {
  // 配置入口
  entry: {},
  // 配置出口
  output: {
    path: path.join(__dirname, './dist/'),
    filename: 'static/js/[name].[hash:5].js',
    publicPath: '/'
  },
  // 路径配置
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  // loader配置
  module: {
    rules: [
      {
        test: /\.(js)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [path.join(__dirname, './src')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.ejs$/,
        loader: 'ejs-loader',
        include: [path.join(__dirname, './src')],
        query: {
          variable: 'data'
          // mustache模板：
          // 具体参考lodash/underscore的template方法
          // interpolate : '\\{\\{(.+?)\\}\\}',
          // evaluate : '\\[\\[(.+?)\\]\\]'
        }
      },
      // html中的img标签
      {
        test: /\.(htm|html)$/i,
        loader: 'html-withimg-loader',
        include: [path.join(__dirname, './src')],
        options: {
          limit: 10000,
          name: 'static/img/[name].[hash:5].[ext]'
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.join(__dirname, './src')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/img/[name].[hash:5].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:5].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/fonts/[name].[hash:5].[ext]'
        }
      },
      {
        test: /\.css$/,
        use: [
          env === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          env === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          env === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    // 全局引入lodash
    new webpack.ProvidePlugin({
      _: 'lodash'
    }),
    // 设置每一次build之前先删除dist
    new CleanWebpackPlugin(
      ['dist/*'], // 匹配删除的文件
      {
        root: __dirname, // 根目录
        verbose: true, // 开启在控制台输出信息
        dry: false // 启用删除文件
      }
    )
  ]
}

module.exports = webpackConfig
