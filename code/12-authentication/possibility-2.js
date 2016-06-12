resolve: {
    authToken: ['authenticationService', function(authService) {
        return authService.authenticate();
    }]
}
