const path = require("path");

module.exports = {
  name: "wordrelay-setting",
  mode: "development", // 실서비스에서는 'production'
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  // 입력
  entry: {
    app: ["./Client"],
  },
  // 출력
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  },
};
