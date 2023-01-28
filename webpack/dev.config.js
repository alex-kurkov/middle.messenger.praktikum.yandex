/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge');
const production = require('./production.config');
const path = require('path');

module.exports = merge(production, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    static: path.resolve(__dirname, '..', 'public'),
    port: 9009,
    hot: true,
  },
});
