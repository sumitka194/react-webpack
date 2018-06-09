import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import './env';

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: 'babel-loader',
      exclude: /node_modules/,
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, 'src/public/index.html'),
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    compress: true,
    hot: process.env.NODE_ENV === 'development',
    quiet: process.env.NODE_ENV === 'development',
    port: 3000,
  },
  performance: {
    hints: process.env.NODE_ENV === 'development' ? 'warning' : false,
  },
};
