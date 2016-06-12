class ContactListController {
    constructor($scope, $stateParams) {

    }
}

angular
    .module('ContactList', [])
    .controller('ContactListController', [
        '$scope',
        '$stateParams',
        ContactListController
    ]);