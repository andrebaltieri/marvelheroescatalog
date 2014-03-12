(function () {
    'use strict';

    var controllerId = 'HeroController';

    // TODO: replace app with your module name
    angular.module('app').controller(controllerId,
        ['$scope', 'HeroRepository', HeroController]);

    function HeroController($scope, HeroRepository) {
        var vm = this;

        vm.activate = activate;
        vm.title = 'Select your hero';
        vm.heroes = [];

        function activate() { }        

        getHeroes();

        function getHeroes() {
            HeroRepository.GetHeroes()
                .then(getHeroesSuccess)
                .catch(getHeroesFailed);

            function getHeroesSuccess(data) {
                angular.forEach(data.data.data.results, function (hero) {
                    vm.heroes.push(hero);
                });
            }

            function getHeroesFailed(error) {
                toastr.error(error.message, 'Error');
            };
        }
    }
})();
