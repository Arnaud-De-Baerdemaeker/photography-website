const webpack = require("webpack");
const path = require("path");
const dotenv = require("dotenv").config({path: "./.env"}); // eslint-disable-line no-unused-vars

const config = {
    entry: ["./src/client/index.js"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(jpg|svg)$/,
                use: "file-loader",
            },
            {
                test: /\.png$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            mimetype: "image/png",
                        },
                    },
                ],
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: "file-loader",
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(process.env),
        }),
    ],
    devServer: {
        contentBase: "./dist",
        port: 4000,
        historyApiFallback: true
    },
};

module.exports = config;
