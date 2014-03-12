(function () {
    'use strict';

    var controllerId = 'MainController';

    // TODO: replace app with your module name
    angular.module('app').controller(controllerId,
        ['$scope', MainController]);

    function MainController($scope) {
        var vm = this;

        vm.activate = activate;
        vm.title = 'Welcome to Marvel Heroes Catalog';

        function activate() { }
    }
})();
