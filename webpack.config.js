const path = require('path');

module.exports = {
    entry: './src/JS/Script.js',
    output:{
       path: path.resolve(__dirname,'./dist/JS'),
       filename: 'Index.js'
    },

    mode: 'production',

    watch: true,

    devtool:"source-map"
};