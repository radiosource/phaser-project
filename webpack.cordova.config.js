var path = require('path')
var webpack = require('webpack')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')

// Phaser webpack config
var phaser = path.join(__dirname, '/node_modules/phaser/dist/phaser.js')

var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'false'))
})

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      path.resolve(__dirname, 'index.js')
    ],
    vendor: ['pixi', 'p2', 'phaser', 'webfontloader']

  },
  output: {
    path: path.resolve(__dirname, 'www/dist'),
    publicPath: './dist/',
    filename: 'bundle.js'
  },
  plugins: [
    definePlugin,
    new CleanWebpackPlugin(['www']),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.optimize.UglifyJsPlugin({
      drop_console: true,
      minimize: true,
      output: {
        comments: false
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'/* chunkName= */,
      filename: 'vendor.bundle.js'/* filename= */
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'assets/**/*'),
        to: path.resolve(__dirname, 'www')
      }
    ]),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, 'www/index.html'),
      template: './app/index.html',
      chunks: [
        'vendor', 'app'
      ],
      chunksSortMode: 'manual',
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        html5: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
        removeComments: true,
        removeEmptyAttributes: true
      },
      hash: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'app'),
        use: {
          loader: 'babel-loader',
          options: {
            "presets": [],
            "plugins": [
              ["@babel/plugin-proposal-class-properties", {"loose": true}]
            ]
          }
        }
      },
      {test: /phaser-split\.js$/, use: ['expose-loader?Phaser']}
    ]
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  resolve: {
    alias: {
      'phaser': phaser,
    }
  }
}
