var webpack = require('webpack'),
    path = require('path');
var eslintrcPath = path.resolve(__dirname, '.eslintrc');

module.exports = {

  output: {
    publicPath: './',
    path: 'dist/',
    filename: '[name].js',
  },

  debug: false,
  devtool: false,
  entry: {
    app: ['./src/app.js'],
  },

  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },

  stats: {
    colors: true,
    reasons: false,
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        // This has effect on the react lib size
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],

  resolve: {
    extensions: ['', '.js'],
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|libphonenumber\.js)/,
      loader: 'babel-loader',
      query: { compact: false },
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
      loader: 'file',
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file',
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file',
    }],
  },

  eslint: {
    configFile: eslintrcPath,
  },
};
