var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = function (options) {
    const ENV = (process.env.ENV = process.env.NODE_ENV = 'development');

    return webpackMerge(commonConfig, {
        devtool: 'inline-source-map',

        mode: 'development',

        output: {
            path: helpers.root('dist'),
            publicPath: '/',
            filename: '[name].js',
            chunkFilename: '[id].chunk.js'
        },

        plugins: [
            // new ExtractTextPlugin('[name].css')
            new ExtractTextPlugin('./app/bundle.css', {
                allChunks: true
            })
        ],

        devServer: {
            historyApiFallback: true,
            stats: 'minimal'
        }
    });
}