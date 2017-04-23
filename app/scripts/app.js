(function() {
    function config($locationProvider, $stateProvider, $urlRouterProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as homeCtrl',
                templateUrl: '/templates/home.html'
            });    
    }
          
        
angular
    .module('blocChat', ['ui.bootstrap', 'ui.router', 'firebase', 'ngCookies'])
    .config(config);
})();