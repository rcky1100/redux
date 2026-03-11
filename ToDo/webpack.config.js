import path from "path";

export default {
  mode: "development",

  entry: "./src/index.js",

  output: {
    path: path.resolve("dist"),
    filename: "bundle.js",
  },

  devServer: {
    static: "./dist",
    port: 3000,
  },
  devtool: "source-map",
};
