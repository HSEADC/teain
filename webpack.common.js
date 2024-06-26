const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')

const webpack = require('webpack')
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    index: './src/index.js',
    fermentation: './src/js/typesoftee/fermentation.js',
    typesoftea: './src/typesoftea.jsx',
    recipes: './src/recipes.jsx',
    teaCard: './src/typesoftea/teaCard.jsx',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'docs')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          }
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.png/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.avif/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.webp/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.svg/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/share/'),
          to: path.resolve(__dirname, 'dev_build/share/')
        },
        {
          from: path.resolve(__dirname, 'src/share/'),
          to: path.resolve(__dirname, 'docs/share/')
        }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
    }),

    // Index

    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),

    // Section
    new HtmlWebpackPlugin({
      template: './src/tea.html',
      filename: './tea.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/media.html',
      filename: './media.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/typesoftee/fermentation.html',
      filename: './typesoftee/fermentation.html',
      chunks: ['fermentation']
    }),

    new HtmlWebpackPlugin({
      template: './src/typesoftea.html',
      filename: './typesoftea.html',
      chunks: ['typesoftea']
    }),

    // Article
    new HtmlWebpackPlugin({
      template: './src/typesoftee/fermentation/Indian_Black_Tea.html',
      filename: './typesoftee/fermentation/Indian_Black_Tea.html'
    }),


    new HtmlWebpackPlugin({
      template: './src/typesoftea/teaCard.html',
      filename: './typesoftea/teaCard.html',
      chunks: ["teaCard"]
    }),

    new HtmlWebpackPlugin({
      template: './src/recipes.html',
      filename: './recipes.html',
      chunks: ['recipes']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/recipes/thyme_and_apricots.html',
      filename: './articles/recipes/thyme_and_apricots.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/media/puerh.html',
      filename: './media/puerh.html'
    }),

    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
