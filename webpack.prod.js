const path = require('path');
const common = require("./webpack.common");
const merge = require("webpack-merge");

module.exports = merge(common, {
    mode: "production",
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.[hash].bundle.js' // added cache busting by adding the hash
    }
});