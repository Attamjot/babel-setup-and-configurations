const path = require('path');
const common = require("./webpack.common");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[hash].bundle.js' // added cache busting by adding the hash
    },
    plugins:[new CleanWebpackPlugin()]
});