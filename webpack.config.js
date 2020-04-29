const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname,
    devtool: "none",
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.[hash].js' // added cache busting by adding the hash
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
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html'
        })
    ]
};