// 루트(package.json과 같은 위치)에 생성
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
//   const isProd = argv.mode === 'production';
  const isProd = false;
  return {
    entry: {
      main: path.resolve(__dirname, 'client/scripts/index.js'),
      style: path.resolve(__dirname, 'client/css/style.css')
    },
    output: {
      path: path.resolve(__dirname, 'public/js'),
      filename: '[name].js',
      clean: true,
      publicPath: '/js/',
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '../css/[name].css'
      })
    ],    mode: isProd ? 'production' : 'development',
    devtool: isProd ? 'source-map' : 'eval-cheap-module-source-map',
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: { presets: ['@babel/preset-env'] },
          },
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.(png|jpe?g|gif|svg|webp)$/i,
          type: 'asset',
          parser: { dataUrlCondition: { maxSize: 8 * 1024 } }, // 8KB
          generator: { filename: '../assets/[name][hash][ext]' },
        },
      ],
    },


    resolve: { extensions: ['.js'] },
    performance: { hints: false },
    stats: 'minimal',
  };
};
