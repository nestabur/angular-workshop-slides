class MyService {
    constructor(DependencyA) { }
}

angular
    .module('myApp')
    .service('MyService', ['DependencyA', MyService]);

// OR
MyService.$inject = ['DependencyA'];
angular
    .module('myApp')
    .service('MyService', MyService);
