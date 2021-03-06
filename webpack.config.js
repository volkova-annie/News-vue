const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {app: './src/index.js'},
  output: {
    path: path.resolve(__dirname, './static'),
    publicPath: '/static/',
    filename: 'app.js'
  },
  module: {
     rules: [
       {
         test: /\.vue$/,
         loader: 'vue-loader',
         options: {
          loaders: {
            css: ExtractTextPlugin.extract({
              use: 'css-loader',
              fallback: 'vue-style-loader'
            })
          }
        }
       },
       {
         test: /\.jsx?$/,
         exclude: /node_modules/,
         loader: 'babel-loader',
       },
       {
         test: /\.css$/,
         loader: ExtractTextPlugin.extract({
           fallback: 'style-loader',
           use: [
             'css-loader',
             'postcss-loader'
           ]
         })
       }
     ]
   },
   plugins: [
    new ExtractTextPlugin({
      filename: '[name].css',
      disable: false,
      allChunks: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    // new webpack.ProvidePlugin({
    //  fetch: 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch',
    //  EventSource: 'imports-loader?this=>global!exports-loader?global.EventSource!event-source-polyfill',
    // }),
   ],
   resolve: {
     extensions: ['.js', '.vue', '.json'],
     alias: {
       'vue$': 'vue/dist/vue.esm.js',
       '@': resolve('src')
     }
   }
};
