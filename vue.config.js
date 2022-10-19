module.exports = {
    publicPath: process.env.NODE_ENV === "development" ? "/" : "/",
    lintOnSave: false,
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/assets/scss/style.scss";`
            }
        }
    }
}
