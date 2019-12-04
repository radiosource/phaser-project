var path = require('path')
var webpack = require('webpack')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var WorkboxPlugin = require('workbox-webpack-plugin')

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
    path: path.resolve(__dirname, 'build'),
    publicPath: './',
    filename: 'js/bundle.js'
  },
  plugins: [
    definePlugin,
    new CleanWebpackPlugin(['build']),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.optimize.UglifyJsPlugin({
      drop_console: true,
      minimize: true,
      output: {
        comments: false
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor' /* chunkName= */,
      filename: 'js/vendor.bundle.js' /* filename= */
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html', // path.resolve(__dirname, 'build', 'index.html'),
      template: './app/index.html',
      chunks: ['vendor', 'app'],
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
    }),
    new CopyWebpackPlugin([
      {from: 'assets', to: 'assets'},
      {from: 'app/manifest.json', to: './manifest.json'}
    ]),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/, use: {
          loader: 'babel-loader',
          options: {
            "presets": [],
            "plugins": [
              ["@babel/plugin-proposal-class-properties", {"loose": true}]
            ]
          }
        }, include: path.join(__dirname, 'app')
      },
      {test: /phaser-split\.js$/, use: ['expose-loader?Phaser']},
    ]
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  resolve: {
    alias: {
      'phaser': phaser
    }
  }
}
