const path = require("path");

module.exports = {
    mode: "none",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name]-bundle.js"
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        overlay: true
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    //   babelrc: false, 
                      
                  }
                }
            }
        ]
    }
}