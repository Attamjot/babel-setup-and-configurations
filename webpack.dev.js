const path = require('path');
const common = require("./webpack.common");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = merge(common, {
    mode: 'development',
    devtool: "none",
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js'
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
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/template.html'
      })
    ]
});