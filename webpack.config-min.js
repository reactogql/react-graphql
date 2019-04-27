const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const MinifyPlugin = require("babel-minify-webpack-plugin");
// const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./client/index.js",
  output: {
    path: "/dist/",
    filename: "bundle.js"
  },
  // target: "node",
  // externals: [nodeExternals()],
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
    }),
    new MinifyPlugin()
  ]
};
