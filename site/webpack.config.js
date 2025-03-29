const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  mode: "development",
  experiments: {
    asyncWebAssembly: true,
    syncWebAssembly: true,
    topLevelAwait: true,  // Allow top-level `await`
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "index.html" }, 
        "main.css",
        { from: "pkg", to: "pkg" } // Copy WebAssembly package to `dist/`
      ],
    }),
  ],
  resolve: {
    extensions: [".js", ".wasm"], // Ensure Webpack recognizes `.wasm`
  },
};
