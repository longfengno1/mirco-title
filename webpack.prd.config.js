const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    mode: 'production',
    entry: path.join(__dirname, 'src', 'index'),
    output: {
        filename: '[name]-[hash].js',
        chunkFilename: '[name]-[hash].js',
        path: path.resolve(__dirname, 'public')
    },
    optimization: {
        splitChunks: {
            chunks: 'initial',
            cacheGroups: {
                vendor: {
                    test: /node_modules\//,
                    name: 'vendor',
                    priority: 10,
                    enforce: true
                },
                commons: {
                    test: /common\//,
                    name: 'commons',
                    priority: 10,
                    enforce: true
                }
            }
        },
        runtimeChunk: {
            name: 'mainfest'
        }
    },
    module: {
        rules: [{
            test: /\.(jsx|js)$/,
            include: [
                path.resolve(__dirname, 'src')
            ],
            exclude: [
                path.resolve(__dirname, 'node_modules')
            ],
            loader: 'babel-loader'
        },
        {
            test: /\.css$/,
            include: [
                path.resolve(__dirname, 'src')
            ],
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            camelCase: true,
                            localIdentName: '[name]__[local]-[hash:base64:5]'
                        }
                    },
                    'postcss-loader'
                ]
            })
        },
        {
            test: /\.(scss|sass)$/,
            include: [
                path.resolve(__dirname, 'src')
            ],
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: true,
                            camelCase: true,
                            importLoaders: 2,
                            localIdentName: '[name]__[local]-[hash:base64:5]'
                        }
                    },
                    'sass-loader'
                ]
            })
        }
        ]
    },
    resolve: {
        extensions: ['.json', '.js', '.jsx', '.css', 'scss']
    },
    devtool: 'none',
    devServer: {
        contentBase: "./public",
        historyApiFallback: true,
        inline: true,
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: __dirname + "/src/index.tmpl.html",
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            }
        }),
        new ExtractTextPlugin({
            filename: 'styles.css',
            allChunks: true
        }),
        new CleanWebpackPlugin('public/*.*', {
            root: __dirname,
            verbose: true,
            dry: false
        })
    ]
};
