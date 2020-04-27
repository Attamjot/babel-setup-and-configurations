const path = require('path');

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
    }
};