const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  target: "web",
  entry: "./index.jsx",
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  output: {
    filename: "[name].bundle.js",
    path: __dirname + "/build",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin()],
  node: {
    module: "empty",
    dgram: "empty",
    dns: "mock",
    fs: "empty",
    http2: "empty",
    net: "empty",
    tls: "empty",
    child_process: "empty",
  },
};
module.exports = config;
