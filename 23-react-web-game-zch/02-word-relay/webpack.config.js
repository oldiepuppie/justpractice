const path = require("path");

module.exports = {
  name: "wordrelay-setting",
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  entry: {
    app: ["./client.jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-class-properties"],
        },
        exclude: path.join(__dirname, "node_modules"),
      },
    ],
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  },
};