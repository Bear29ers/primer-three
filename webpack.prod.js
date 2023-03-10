const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { merge } = require('webpack-merge');
const commonConf = require('./webpack.common');

const outputFile = '[name].[chunkhash]';
const assetFile = '[contenthash]';

module.exports = () =>
  merge(commonConf({ outputFile, assetFile }), {
    mode: 'production',
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: 'body',
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true,
        },
        filename: path.resolve(__dirname, 'dist/[name].html'),
      }),
    ],
    optimization: {
      minimizer: [new CssMinimizerPlugin()],
    },
  });
