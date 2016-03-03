/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpack-dev-server,
 * which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
 */

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const eslintrcPath = path.resolve(__dirname, '.eslintrc');

module.exports = {
  devtool: 'eval',
  watch: true,
  output: {
    filename: '[name].js',
    path: './dist',
    publicPath: '/',
  },
  entry: {
    app: [
      'webpack-dev-server/client?http://0.0.0.0:3000',
      'webpack/hot/only-dev-server',
      './src/app.js',
    ],
  },

  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },

  stats: {
    colors: true,
    reasons: true,
  },

  resolve: {
    extensions: ['', '.js'],
    alias: {
    },
    root: `${__dirname}/src`,
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel-loader',
    }, {
      test: /\.css$/,
      loader: 'style!css',
    }, {
      test: /\.(gif|png)$/i,
      loader: 'file?name=[name].[ext]',
    }, {
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?mimetype=application/font-woff',
    }, {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?mimetype=application/font-woff2',
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file?name=[name].[ext]',
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file?name=[name].[ext]',
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file?name=[name].[ext]',
    }],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/template.html',
    }),
  ],

  devServer: {
    contentBase: './dist',
    port: 3000,
    hot: true,
    inline: true,
  },

  eslint: {
    configFile: eslintrcPath,
  },
};
