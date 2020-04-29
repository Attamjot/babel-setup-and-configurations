const path = require('path');
const common = require("./webpack.common");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: "production",
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[hash].bundle.js' // added cache busting by adding the hash
    },
    optimization: {
      minimizer: [
        new OptimizeCssAssetsWebpackPlugin(),
        new TerserPlugin(),
        new HtmlWebpackPlugin({
          template: './src/template.html',
          minify: {
            removeAttributeQuotes: true,
            collapseWhitespace: true,
            removeComments: true
          }
        })
      ]
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/,
          use: [
              MiniCssExtractPlugin.loader,  //3. Extracts the css, and adds it to a seperate file and appends it to the html as link tag
              "css-loader",     //2. Translate css into Javascript
              "sass-loader"    //1. Compiles sass to css
              ]
        }
      ]
    },
    plugins:[new MiniCssExtractPlugin({ filename: "[name].[hash].css" }), new CleanWebpackPlugin()]
});