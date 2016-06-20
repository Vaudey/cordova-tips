(function () { // creates closure
    var euroVeloApp = angular.module('euroVeloApp', [
        'ngRoute',
        'ngCordova',
        'ui.router',
        'Controller',
        'Service'
    ]);

    euroVeloApp.config(
        function ($routeProvider, $stateProvider, $urlRouterProvider) {
            $routeProvider.
            when('/', {
                name: 'home',
                templateUrl: 'partials/home.html'
            }).
           /* when('/scan', {
                name: 'scan',
                templateUrl: 'partials/scan.html',
                controller: 'ScanController'
            }).
            when('/about', {
                name: 'about',
                templateUrl: 'partials/about.html',
                controller: 'AboutController'
            }).
            when('/element', {
                name: 'element',
                templateUrl: 'partials/element.html',
                controller: 'ElementController'
            }).*/
            otherwise({
                redirectTo: '../partials/home.html'
            });
        });

})(); // end of closure