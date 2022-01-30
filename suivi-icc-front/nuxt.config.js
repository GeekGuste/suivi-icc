export default {
    head: {
        title: 'Suivi ICC',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        ],
    },
    buildModules: [
        // Simple usage
        '@nuxtjs/vuetify',
    ],
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth-next',
    ],
    axios: {
        baseURL: 'http://127.0.0.1:8000/',
    },
    auth: {
        strategies: {
            local: {
                scheme: 'refresh',
                token: {
                    property: 'access',
                    maxAge: 1800,
                    global: true,
                    // type: 'Bearer'
                },
                refreshToken: {
                    property: 'refresh',
                    data: 'refresh',
                    maxAge: 60 * 60 * 24 * 30
                },
                user: {
                    property: 'username',
                    //autoFetch: true
                },
                endpoints: {
                    login: {
                        url: 'auth/jwt/create/',
                        method: 'post',
                    },
                    refresh: { url: 'auth/jwt/refresh/', method: 'post' },
                    logout: { url: 'auth/token/logout/', method: 'post' },
                    user: {
                        url: 'auth/users/me/',
                        method: 'get',
                        propertyName: false,
                    },
                },
            },
            /*redirect: {
                login: '/login',
                home: '/',
            },*/
        },
    }
}