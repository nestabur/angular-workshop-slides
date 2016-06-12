angular
    .module('SomeModule')
    .constant('apiBaseUrl', 'https://myhost/api/v1/');

// can also be an object
angular
    .module('SomeModule')
    .constant('apiSettings', {
        baseUrl: 'https://myhost/api/',
        apiKey: 'letmein'
    });