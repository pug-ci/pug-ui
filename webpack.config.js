const path = require('path');
const webpack = require('webpack');

function join(dest) { return path.resolve(__dirname, dest); }

const config = {
  devtool: 'inline-source-map',
  entry: {
    application: [
      join('app/application.jsx'),
    ],
  },

  output: {
    path: './public/js/',
    publicPath: '/js/',
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.sass'],
    modulesDirectories: ['node_modules'],
  },

  module: {
    loaders: [{
      test: /.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        cacheDirectory: true,
        presets: ['es2015', 'react', 'stage-0'],
      },
    }],
  },

  devServer: {
    contentBase: './public',
    colors: true,
    historyApiFallback: true,
    inline: true,
  },

  plugins: [
    new webpack.DefinePlugin({
      API_URL: JSON.stringify('//localhost:3000'),
    }),
  ],

};

if (process.env.NODE_ENV === 'production') {
  config.devtool = false;
  config.plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ comments: false }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') },
    }),
  ];
}

module.exports = config;
