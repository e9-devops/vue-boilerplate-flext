module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
    lintOnSave: true,
    configureWebpack: {
        devtool: 'eval'
    },
    css: {
        loaderOptions: {
            scss: {
                prependData: `
				@import "~bootstrap/scss/_functions.scss";
				@import "~bootstrap/scss/_variables.scss";
				@import "~@/scss/variables.scss";
				@import "~@/scss/mixins/mixins.scss";
				`
            }
        }
    },
    pages: {
        login: {
            entry: './src/webapp/auth/login.js',
            template: 'public/index.html',
            filename: 'index.html'
        },
        management: {
            entry: './src/webapp/management/main.js',
            template: 'public/management/index.html',
            filename: 'management/index.html'
        },
        tenant: {
            entry: './src/webapp/tenant/main.js',
            template: 'public/tenant/index.html',
            filename: 'tenant/index.html'
        },
        client: {
            entry: './src/webapp/client/main.js',
            template: 'public/client/index.html',
            filename: 'client/index.html'
        }
    }
};
