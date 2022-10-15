module.exports = {
    build: {
        assetsPublicPath: '',
    },
    publicPath: "/",
    lintOnSave: false,
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/assets/scss/style.scss";`
            }
        }
    }
}
