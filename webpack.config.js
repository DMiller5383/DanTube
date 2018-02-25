var path = require('path');
var webpack = require('webpack');

 module.exports = {
     entry: ['./js/main.js'],
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
     devtool: 'source-map',
     mode: 'development'
 };