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
    indexJSX: './src/index.jsx',
    typesoftea: './src/typesoftea.jsx',
    recipes: './src/recipes.jsx',
    teaCard: './src/typesoftea/teaCard.jsx',
    recipe: './src/recipes/recipe.jsx',
    article: './src/media/article.jsx',
    article2: './src/media/article2.jsx',
    article3: './src/media/article3.jsx',
    article4: './src/media/article4.jsx',
    searchResult: './src/searchResult.jsx',
    media: './src/media.jsx'
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
        test: /\.jpe?g/,
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
      filename: './index.html',
      chunks: ['index', 'indexJSX']
    }),

    // Section
    new HtmlWebpackPlugin({
      template: './src/tea.html',
      filename: './tea.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/media.html',
      filename: './media.html',
      chunks: ['media']
    }),


    new HtmlWebpackPlugin({
      template: './src/typesoftea.html',
      filename: './typesoftea.html',
      chunks: ['typesoftea']
    }),

    // Article



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
      template: './src/recipes/recipe.html',
      filename: './recipes/recipe.html',
      chunks: ['recipe']
    }),
    new HtmlWebpackPlugin({
      template: './src/searchResult.html',
      filename: './searchResult.html',
      chunks: ['searchResult']
    }),

    new HtmlWebpackPlugin({
      template: './src/media/article.html',
      filename: './media/article.html',
      chunks: ['article']
    }),

    new HtmlWebpackPlugin({
      template: './src/media/article2.html',
      filename: './media/article2.html',
      chunks: ['article2']
    }),

    new HtmlWebpackPlugin({
      template: './src/media/article3.html',
      filename: './media/article3.html',
      chunks: ['article3']
    }),

    new HtmlWebpackPlugin({
      template: './src/media/article4.html',
      filename: './media/article4.html',
      chunks: ['article4']
    }),

    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      },
      {
        path: path.join(__dirname, './src/partials/O_Footer.html'),
        location: 'footer',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
