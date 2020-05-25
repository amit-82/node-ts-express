const path = require("path");

module.exports = {
	entry: path.resolve(__dirname, "src/index.ts"),
	watch: true,
	target: "node",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	output: {
		libraryTarget: "commonjs",
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
};
