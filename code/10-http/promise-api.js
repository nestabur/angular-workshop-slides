const promise = $http.get('/someService');

promise
    .then(successCallback)
    .catch(errorCallback);