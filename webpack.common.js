const path = require('path');
const EslintWebpackPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = ({ outputFile, assetFile }) => ({
  entry: {
    index: './src/js/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: `${outputFile}.js`,
    chunkFilename: `${outputFile}.js`,
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: true,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpg?g|gif|png|svg|woff2?|ttf|eot)$/i,
        generator: {
          filename: `./img/${assetFile}.[ext]`,
        },
        type: 'asset/resource',
      },
      {
        test: /\.html$/i,
        use: ['html-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${outputFile}.css`,
    }),
    new EslintWebpackPlugin({
      extensions: ['js'],
      fix: true,
    }),
    new StylelintPlugin({
      fix: true,
    }),
  ],
  resolve: {
    extensions: ['.js', '.json'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
});
