var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // Home View
        .state('home', {
            url: '/home',
            templateUrl: 'templates/mismetas.html'
        })

        // Info Vies
        .state('about', {
            url: '/about',
            templateUrl: 'templates/comosoy.html'
        })
            

        })
    
    
})
