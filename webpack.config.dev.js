const { resolve } = require("path");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPLugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    assetModuleFilename: "assets/images/[hash][ext][query]",
  },
  mode: "development",
  resolve: {
    extensions: [".js"],
    alias: {
      "@images": path.resolve(__dirname, "src/img"),
      "@imagesclientes": path.resolve(__dirname, "src/img/clientes"),
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$|.scss$/i,
        use: [MiniCssExtractPLugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPLugin({
      filename: "assets/[name].[contenthash].css",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "img"),
          to: "assets/images",
        },
      ],
    }),
  ],
};
