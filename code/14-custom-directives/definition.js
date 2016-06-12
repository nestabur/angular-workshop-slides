function testDirective(injectables) {
    return {
        priority: 0,
        replace: false,
        template: '<div></div>',
        transclude: false,
        restrict: 'A',
        scope: false,
        controller: '',
        controllerAs: 'stringIdentifier',
        bindToController: false,
        require: 'siblingDirectiveName', // or '^parentDirectiveName', '?optionalDirectiveName', '?^optionalParent'
        compile: function compile(tElement, tAttrs, transclude) { },
        link: function($scope, element, attrs, controllers, transclude) { }
    };
}

angular.module('myApp').directive('testDirective', [testDirective]);