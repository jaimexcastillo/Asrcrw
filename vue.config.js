module.exports = {
    base: './',
    publicPath: process.env.NODE_ENV === "production" ? "/Asrcrw/" : "/",
    lintOnSave: false,
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/assets/scss/style.scss";`
            }
        }
    }
}
