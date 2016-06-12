function contactListState($stateProvider) {
    $stateProvider.state('contact-list', {
        templateUrl: 'contact-list.html',
        controller: 'ContactListController as contactList'
    });
}

angular
    .module('ContactList')
    .config(['$stateProvider', contactListState]);