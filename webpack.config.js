import { resolve } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";



export const mode = "development";
export const devtool = "inline-source-map";
export const devServer = {
  static: "./dist",
};
export const entry = {
  index: "./src/index.js",
  nextindex: "./src/nextIndex.js",
};
export const output = {
  filename: "[name].bundle.js",
  // eslint-disable-next-line no-undef
  path: resolve(__dirname, "dist"),
};
export const module = {
  rules: [
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: "asset/resource",
    },
  ],
};
export const plugins = [
  new HtmlWebpackPlugin({
    title: "Output Management",
  }),
];
