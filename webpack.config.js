const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./client/index.js",
  output: {
    path: "/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      {
        use: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "server/public/index.html")
    })
  ]
};
