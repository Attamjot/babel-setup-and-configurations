# Babel Integration with Webpack

### Basic Dependencies required to setup webpack with babel:
* @babel/core
* @babel/preset-env
* @babel/polyfill
* babel-loader
* webpack
* webpack-cli
* path
* -----------------Extra Dependencies --------------------
* webpack-dev-server ( To run the application  on local dev server)
* html-webpack-plugin

### Plugins:
* html-webpack-plugin ( html-webpack-plugin plugin will generate an HTML5 file for you that includes all your webpack bundles in the body using script tags.)

### Webpack Configuration

```javascript
 // webpack.config.js
    const path = require('path');
    const HtmlWebpackPlugin = require('html-webpack-plugin');

    module.exports = {
        context: __dirname,
        entry: './src/index.js',
        output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
        },
        module: {
            rules: [
                {
                    test: '/\.js$/',
                    exclude: '/node_modules/',
                    use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                    },
                    // Instead of defining the object to use key, you can also do ==> use: "babel-loader"
                    
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin()
        ]
    };
```