class MyService {
    constructor(DependencyA) { }
}

angular
    .module('myApp')
    .service('MyService', ['DependencyA', MyService]);