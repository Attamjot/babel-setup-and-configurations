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
* html-webpack-plugin ( Refer plugins section )  
* style-loader  ( Style- loader uses the javascript and convert it to css and add it to the head tag in style tag )
* css-loader ( The css-loader interprets @import and url() like import/require() and will resolve them and convert the css to javscript and add it to the bundle)
* sass-loader ( Loads a Sass/SCSS file and compiles it to CSS. )
  * node-sass ( sass-loader depends on this dependency )
* webpack-merge ( Will combine/concatenates the common functionality of webpack configurations setup in                                  "webpack.common.js" with webpack.dev.js and webpack.prod.js )

### Plugins:
* html-webpack-plugin ( html-webpack-plugin plugin will generate an HTML5 file for you that includes all your webpack bundles in the body using script tags.)

### Webpack Configuration
 1. webpack.dev.js
 2. webpack.prod.js
 3. webpack.common.js

### Note:
* While adding a loader, not to add any type of quote to the test key , as it will not find the specific file format.
* **use** keyword in **loader** resolves it from right to left, so as you can see in the styling loader, first it resolves the css-loader , by resolving the css imports and bundle all the css to the javascript file and style-loader then take this css bundled in javascript file and converts it again and adds it to the style tag in head section of html file.
