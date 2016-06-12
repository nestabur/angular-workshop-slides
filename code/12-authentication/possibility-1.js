$rootScope.$on('$locationChangeSuccess',
    function(event, newUrl, oldUrl, newState, oldState) {
        event.preventDefault();

        // authenticate

        $urlRouter.sync();
    }
);