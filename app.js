//angular.module('myapp', ['mobileServices'])
//    .config(['$httpProvider', function ($httpProvider) { // coniguring the httpProvider
//            $httpProvider.defaults.headers.common['X-ZUMO-APPLICATION'] = 'kUQGowMwKXyftEuZDPRXIMAVJgLgeT41'; // add the application key
//            $httpProvider.defaults.headers.common['Content-Type'] = 'Application/json';
//    }]);

angular.module('myapp', ['azure-mobile-service.module'])
    .config(['$httpProvider', function ($httpProvider) { // coniguring the httpProvider
            $httpProvider.defaults.headers.common['X-ZUMO-APPLICATION'] = 'kUQGowMwKXyftEuZDPRXIMAVJgLgeT41'; // add the application key
            $httpProvider.defaults.headers.common['Content-Type'] = 'Application/json';
    }]);