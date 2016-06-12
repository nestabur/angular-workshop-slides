function myInterceptor() {
    return {
        request: function(config) {
            config.headers.authToken = 'super-secret';

            return config;
        }
    };
}