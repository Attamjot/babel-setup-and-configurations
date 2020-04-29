const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: {
        main: './src/index.js',
        vendor: './src/vendor.js'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: [
                    "style-loader",  //3. Creates 'style' nodes from JS strings and Injects styles into DOM 
                    "css-loader",     //2. Translate css into Javascript
                    "sass-loader"    //1. Compiles sass to css
                    ]
            },
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                use: {
                  loader: 'babel-loader',
                  options: {
                      presets: ['@babel/preset-env']
                  }
                },
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(svg|png|jpg|jpeg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                       name: '[name].[hash].[ext]',
                       outputPath: "images"
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html'
        })
    ]
};