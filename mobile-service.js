// mobile-service.js
'use strict';
 
angular.module('mobileServices', ['ngResource']). // new service mobileServices depending on ngResource
    factory('Task', function($resource) { // declaring a MyTable resource
        return $resource('https://lab.azure-mobile.net/tables/equipos/:equipoId', {equipoId: '@id'}, // binding to the table url
            {
                'update': { method:'PATCH' } // adding an update function
            }
        );
    });