angular
    .module('myApp')
    .config(['$logProvider','$compileProvider', function($logProvider, $compileProvider) {
        $logProvider.debugEnabled(false);
        $compileProvider.debugInfoEnabled(false);
    }]);