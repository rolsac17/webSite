const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const dotenv = require('dotenv');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

dotenv.config();

const isProd = (process.env.NODE_ENV) === 'production';

module.exports = {
  devtool: isProd ? 'hidden-source-map' : 'cheap-source-map',
  entry: './src/frontend/index.js',
  mode: process.env.NODE_ENV,
  output: {
    path: isProd ? path.join(process.cwd(), './src/backend/public') : '/',
    filename: isProd ? 'assets/app-[hash].js' : 'assets/app.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  optimization: {
    minimize: isProd,
    minimizer: isProd ? [new TerserPlugin()] : [],
    splitChunks: {
      chunks: 'async',
      name: true,
      cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: 'all',
          reuseExistingChunk: true,
          priority: 1,
          filename: isProd ? 'assets/vendor-[hash].js' : 'assets/vendor.js',
          enforce: true,
          test(module, chunks) {
            const name = module.nameForCondition && module.nameForCondition();
            return chunks.some((chunks) => chunks.name !== 'vendors' && /[\\/]node_modules[\\/]/.test(name));
          },
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: {
          loader: 'eslint-loader',
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(s*)css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              prependData: `
                @import "${path.resolve(__dirname, 'src/frontend/assets/styles/main.scss')}";
                `,
            },
          },
        ],
      },
      {
        test: /\.(png|gif|jpg|svg|jpeg|woff|ttf|eot|gif|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'assets/[hash].[ext]' },
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: isProd ? 'assets/app-[hash].css' : 'assets/app.css',
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer(),
        ],
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
    isProd ? new CompressionPlugin({
      test: /\.js$|\.css$/,
      filename: '[path].gz',
    }) : false,
    isProd ? new ManifestPlugin() : false,
  ].filter(Boolean),
};
