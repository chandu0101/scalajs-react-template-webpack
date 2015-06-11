'use strict';

var webpack = require('webpack');

module.exports = {

    entry: [
        'webpack/hot/only-dev-server',
        './index.js'
    ],
    output: {
        path: __dirname + '/build',
        publicPath: __dirname  + "/build/",
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]


};