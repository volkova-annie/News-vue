const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './static'),
    publicPath: '/static/',
    filename: 'app.js'
  },
  module: {
     rules: [
       {
         test: /\.vue$/,
         loader: 'vue-loader'
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
     new webpack.ProvidePlugin({
       fetch: 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch',
       EventSource: 'imports-loader?this=>global!exports-loader?global.EventSource!event-source-polyfill',
     }),
   ],
   resolve: {
    //  extensions: ['.js', '.vue', '.json'],
    //  alias: {
    //    'vue$': 'vue/static/vue.esm.js',
      //  '@': resolve('src')
    //  }
   }
};
