(function () {
    'use strict';
    var id = 'app';

    var app = angular.module('app', [
        'ngAnimate',
        'ngRoute'
    ]);

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'MainController as vm',
                templateUrl: 'modules/main/views/index.html'
            })
            .when('/heroes', {
                controller: 'HeroController as vm',
                templateUrl: 'modules/heroes/views/index.html'
            })
            .when('/contact', {
                controller: 'MainController as vm',
                templateUrl: 'modules/main/views/contact.html'
            });
    });
})();