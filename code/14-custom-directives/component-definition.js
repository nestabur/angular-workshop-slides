const myComponent = {
    template: '<div></div>',
    transclude: false,
    bindings: {
        myAttribute: '<'
    },
    controller: 'CustomComponentController', // instantiated as $ctrl
    require: {
        parent: '^parentComponent'
    }
};

angular.module('myApp').component('customComponent', myComponent);