const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const output = path.join(__dirname, "build/");
const production = process.env.NODE_ENV === "production";

module.exports = {
  devServer: {
    contentBase: output,
    port: 3000,
  },
  entry: "./src/Index.bs.js",
  mode: production ? "production" : "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  output: {
    filename: "main.js",
    path: output,
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: "./src/public/favicon.ico",
      inject: false,
      template: "./src/public/index.html",
    }),
  ],
};
