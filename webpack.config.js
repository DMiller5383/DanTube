var path = require('path');
var webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

 module.exports = {
     entry: ['./js/index.js'],
     node: {
        fs: "empty",
        net: "empty",
        tls: "empty"
     },
     resolve: {
        extensions: ['.js', '.jsx']
    },

     output: {
         path: path.resolve(__dirname, 'build/js'),
         filename: 'main.bundle.js'
     },
     module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-env","@babel/preset-react"]
                }
              }
            },
          ]  
},
     stats: {
         colors: true
     },
     mode: 'development',
     plugins: [
         new UglifyJsPlugin({
             test: /\.js($|\?)/i,
             sourceMap: true
            })
        ],
 };