var path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
var webpack = require("webpack");

module.exports = {
    //项目入口文件
    entry: ["@babel/polyfill", "./src/main.js"],
    output: {
        //打包出口路径 path.resolve :输出绝对路径
        path: path.resolve(__dirname, "./dist"),
        //通过devServer访问路径
        publicPath: "/dist/",
        //打包后的文件名
        filename: "main.js"
    },
    resolve: {
        //路径别名
        alias: {
            // vue$: "vue/dist/vue.esm.js",
            vue$: "vue/dist/vue.js",
            "@": path.resolve(__dirname, "./src")
        },
        //路径别名自动解析确定的扩展
        extensions: [".js", ".vue", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["vue-style-loader", "css-loader"]
            },
            {
                test: /\.less$/,
                use: ["vue-style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            }
        ]
    },
    plugins: [
        // 请确保引入这个插件！
        new VueLoaderPlugin()
    ],
    mode: "development",
    devServer: {
        historyApiFallback: true,
        overlay: true
    }
};



