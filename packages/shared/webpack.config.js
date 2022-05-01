const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV === `development` ? `development` : `production`,
  devtool: "source-map",
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  externals: [/^crypto-js\/.+$/, `crypto-js`, `yup`],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    library: {
      // type: `umd` // careful umd does not work with nodejs
      type: `commonjs`,
    },
    clean: true,
  },
};
