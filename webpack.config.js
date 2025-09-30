// 루트(package.json과 같은 위치)에 생성
const path = require('path');

module.exports = (env, argv) => {
//   const isProd = argv.mode === 'production';
  const isProd = false;
  return {
    entry: path.resolve(__dirname, 'client/scripts/index.js'),
    output: {
      path: path.resolve(__dirname, 'public/js'),
      filename: isProd ? 'bundle.[contenthash].js' : 'bundle.js',
      clean: true,
      publicPath: '/js/',
    },
    mode: isProd ? 'production' : 'development',
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
          use: ['style-loader', 'css-loader'],
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
