(function () {
    angular.module('app').factory('HeroRepository', ['$http', HeroRepository]);

    function HeroRepository($http) {
        var service = {
            GetHeroes: GetHeroes
        };
        return service;

        function GetHeroes() {
            return $http({
                method: 'GET',
                url: 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=9038d42aebcc0638db2a02500676389e&hash=b3ab50610527184d83c082d84f365eb9&limit=35&name=Spider-Man'
            });
        }
    }
})();