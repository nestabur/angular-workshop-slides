function mouseInteractionDirective(injectables) {
    return {
        restrict: 'A',
        link: function ($scope, element) {
            $scope.mouseInteractionController.initialize(element);
        }
    };
}

angular
    .module('myApp')
    .directive('mouseInteraction', [mouseInteractionDirective]);