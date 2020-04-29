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
* html-loader  ( Whereever it finds the img with src, it converts it to require() )
* file-loader  ( File loader will check these requires tags and resolves this paths and paste the images that we                     want to render to the dist folder. )
* clean-webpack-plugin (A webpack plugin to remove/clean your build folder(s).)

### Plugins:
* html-webpack-plugin ( html-webpack-plugin plugin will generate an HTML5 file for you that includes all your webpack bundles in the body using script tags.)

### Webpack Configuration
 1. webpack.dev.js
 2. webpack.prod.js
 3. webpack.common.js

### Note:
* While adding a loader, not to add any type of quote to the test key , as it will not find the specific file format.
* **use** keyword in **loader** resolves it from right to left, so as you can see in the styling loader, first it resolves the css-loader , by resolving the css imports and bundle all the css to the javascript file and style-loader then take this css bundled in javascript file and converts it again and adds it to the style tag in head section of html file.
* While installing jquery and popper.js and adding navbar from **bootstrap**, i faced an issue on clicking hamburger icon , console throws an error: **"Cannot convert object to primitive value error"**. So to solve this issue , just follow the below steps:
```javascript
  The problem is in jquery version 3.5.0, so if we change the version from 3.5.0 to 3.4.1, it will start working
  terminal :
  1. npm uninstall --save jquery
  2. npm install --save-dev jquery@~3.4.1
           OR
     npm i -D jquery@~3.4.1

```
