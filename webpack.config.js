var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");
module.exports = {
    entry: {
        build: './src/scripts/index.js'
    },
    output: {
        path: "./dist/",
        filename: "app.js"
    },
    module: {
        loaders: [{
            test: /.css$/,
            loaders: ["style", "css"],
            exclude: "/node_modules/"
        }, {
            test: /.less$/,
            loaders: ["style", "css", "less"],
            exclude: "/(node_modules|bower_components)/"
        }, {
            test: /.jsx?$/,
            loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react'],
            exclude: "/node_modules/",
            include: path.resolve(__dirname, "src")
        }]
    },
    devServer: {

    },
    resolve: {
        extensions: ['', '.js', ".css", '.jsx'] //自动补全识别后缀
    },
    plugins: [
        new htmlWebpackPlugin({
            title: "todolist",
            chunks: ["app"]
        })
    ]
}
