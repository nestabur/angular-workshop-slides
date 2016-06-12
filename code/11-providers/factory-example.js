function TestFactory() {
    const thisIsPrivate = 'Private';

    function getPrivate() {
        return thisIsPrivate;
    }

    return {
        variable: 'This is public',
        getPrivate: getPrivate
    };
}

angular.module('SomeModule').factory('TestFactory', [TestFactory]);