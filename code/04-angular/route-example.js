function contactListState($stateProvider) {
    $stateProvider.state('contactList', {
        url: '/contact-list',
        templateUrl: 'contact-list.html',
        resolve: { }
    });
}

angular
    .module('ContactList')
    .config(['$stateProvider', contactListState]);
