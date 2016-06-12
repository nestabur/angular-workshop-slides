function contactListState($stateProvider) {
    $stateProvider.state('contact-list', {
        url: '/contact-list',
        templateUrl: 'contact-list.html',
        controller: 'ContactListController as $ctrl'
    });
}

angular
    .module('ContactList')
    .config(['$stateProvider', contactListState]);