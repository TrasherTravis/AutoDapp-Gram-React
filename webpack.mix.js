const mix = require('laravel-mix');


mix.disableNotifications()
.options({processCssUrls: false})



/* ----------------------------
Compile AutoDapp script
------------------------------ */

// Template related global css
.copy('src/develop/css/global.css','build/autodapp/dist/global.css')

// AutoDapp builder css
.sass('src/develop/sass/autodapp.scss','build/autodapp/dist/gram.min.css')

// Template related global js
.copy('src/develop/js/global.js','build/autodapp/dist/global.js')

// AutoDapp builder js
.js('src/App.js','build/autodapp/dist/gram.min.js')


// Comment this off when there is no change for AutoDapp fonts and svg.
// const assets_data = [
//     'fonts',
//     'svg'
// ]
// for(let asset of assets_data){
//     mix.copyDirectory(`autodapp/develop/${asset}`,`autodapp/dist/${asset}`)
// }
