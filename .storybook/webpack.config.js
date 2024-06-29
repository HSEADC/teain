const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { resolve } = require('node:path')

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: resolve(__dirname, '../'),
  });

  config.plugins.push(new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }));

  return config;


};

