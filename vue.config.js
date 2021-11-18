process.env.VUE_APP_VERSION = process.env.npm_package_version;

const {InjectManifest} = require('workbox-webpack-plugin');

module.exports = {
    publicPath: '/vue/',
    // remove workbox from vue-pwa pipeline
    chainWebpack: config => {
        config.plugins.delete('workbox');
    },
    configureWebpack: () => {
        if (process.env.NODE_ENV === "production") {
            return {
                plugins: [
                    // add workbox to webpack config.
                    new InjectManifest({
                        swSrc: "./src/service-worker.js",
                        swDest: "service-worker.js",
                        exclude: [
                            /^.*api\/.*$/,
                        ]
                        // other workbox options..
                    }),
                ]
            };
        }
    },
    devServer: {
        host: 'localhost',
        port: 8080,
        overlay: true
    },
    pwa: {
        manifestOptions: {
            name: "Vue learning repo",
            short_name: "Vue learning",
            start_url: "/",
            display: "standalone",
            theme_color: "#1f70b8",
            background_color: "#1f70b8",
        },
        themeColor: "#1f70b8",
        msTileColor: "#1f70b8",
        appleMobileWebAppCapable: "yes",
        appleMobileWebAppStatusBarStyle: "black",
        manifestCrossorigin: 'use-credentials',
    },
};
