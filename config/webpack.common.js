const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
const helpers = require('./helpers');

module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts'
    },

    resolve: {
        extensions: ['.ts', '.js', '.json'],
        modules: [helpers.root('src'), helpers.root('node_modules')]
    },

    module: {
        rules: [
            // {
            //     test: /\.ts$/,
            //     loaders: [{
            //         loader: 'awesome-typescript-loader',
            //         options: {
            //             tsconfig: helpers.root('src', 'tsconfig.app.json')
            //         }
            //     }, 'angular2-template-loader']
            // },
            {
                test: /\.html$/,
                use: 'raw-loader',
                exclude: [helpers.root('src/index.html')]
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.css$/,
                use: ['to-string-loader', 'css-loader'],
                exclude: [helpers.root('src', 'styles')]
            },
            {
                test: /\.scss$/,
                use: ['to-string-loader', 'css-loader', 'sass-loader'],
                exclude: [helpers.root('src', 'styles')]
            },
            {
                test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
                use: [{
                    loader: '@angular-devkit/build-optimizer/webpack-loader',
                    options: { sourceMap: true }
                }, '@ngtools/webpack']
            },
            {
                test: /\.js$/,
                use: [{
                    loader: '@angular-devkit/build-optimizer/webpack-loader',
                    options: { sourceMap: true }
                }]
            }
        ]
    },

    plugins: [
        new AngularCompilerPlugin({
            tsConfigPath: helpers.root('src', 'tsconfig.app.json'),
            entryModule: helpers.root('src/app', 'app.module#AppModule'),
            sourceMap: true,
            compilerOptions: {
                module: 'commonjs'
            }
        }),

        new webpack.optimize.SplitChunksPlugin({
            chunks: "all",
            minSize: 20000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: true
        }),

        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
};