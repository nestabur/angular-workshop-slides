angular.module('myApp').run(function($http) {
    $http.defaults.headers.common.Authorization = 'Basic IVxfcIKfib341';
});