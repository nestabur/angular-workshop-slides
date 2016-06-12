angular
    .module('myModule', ['ui-router'])
    .config(function ($stateProvider) { })
    .run(initializationFn)
    .provider('myProvider', function () { })
    .controller('myController', '');