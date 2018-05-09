const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
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
  devtool: 'eval-source-map',
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
    }),
    new ExtractTextPlugin({
      filename: 'styles.css',
      allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
