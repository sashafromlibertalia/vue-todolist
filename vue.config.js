const path = require("path");
const vueSrc = "./src";

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/vue-todolist/'
        : '/',
    runtimeCompiler: true,
    css: {
        modules: true
    },
    configureWebpack: {
        resolve: {
            alias: {
                "@": path.resolve(__dirname, vueSrc)
            },
            extensions: ['.js', '.vue', '.json']
        }
    }
};