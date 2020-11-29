const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpackBaseConfig = require('./webpack.config.base')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const merge = require('webpack-merge')
const utils = require('./utils')
const path = require('path')

class ChunksFromEntryPlugin {
  apply (compiler) {
    compiler.hooks.emit.tap('ChunksFromEntryPlugin', compilation => {
      compilation.hooks.htmlWebpackPluginAlterChunks.tap(
        'ChunksFromEntryPlugin',
        (_, { plugin }) => {
          // takes entry name passed via HTMLWebpackPlugin's options
          const entry = plugin.options.entry
          const entrypoint = compilation.entrypoints.get(entry)

          return entrypoint.chunks.map(chunk =>
            ({
              names: chunk.name ? [chunk.name] : [],
              files: chunk.files.slice(),
              size: chunk.modulesSize(),
              hash: chunk.hash
            })
          )
        }
      )
    })
  }
}
// 输出目录
const outputDir = '/dist/test/'
let testWebpackConfig = {
  mode: 'production',
  devtool: 'source-map',
  // 出口
  output: {
    path: path.join(__dirname, `.${outputDir}`)
  },
  plugins: [
    new UglifyJsPlugin({
      sourceMap: true,
      parallel: true
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[hash:5].css'
    })
  ]
}

testWebpackConfig = utils.pushHtmlWebpackPlugins(
  merge(webpackBaseConfig, testWebpackConfig),
  // html-webpack-plugin options
  {
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true
      // more options:
      // https://github.com/kangax/html-minifier#options-quick-reference
    }
  },
  outputDir
)

testWebpackConfig.plugins.push(new ChunksFromEntryPlugin())

module.exports = testWebpackConfig
