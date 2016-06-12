class HelloService {
    constructor() {
        // Do some initialization
    }

    sayHello() {
        console.log('Hello!')
    }
}

angular.module('SomeModule').service('HelloService', [HelloService]);