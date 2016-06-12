class MyService { /* ... */ }

function MyServiceProvider() {
    let timeout = 3000;

    this.setTimeout = function(seconds) {
        timeout = seconds;
    };

    this.$get = [function() {
        return new MyService(timeout); // will only be called once
    }];
}

angular.module('SomeModule').provider('MyService', [MyServiceProvider]);