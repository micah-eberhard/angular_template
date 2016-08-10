'use strict'
myApp.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: './views/info.html',
        controller: 'InfoController as infoC'
      })
      .when('/rigger', {
        templateUrl: './views/rigger.html',
        controller: 'RigController as RC'
      })
      .when('/arena', {
        templateUrl: './views/arena.html',
        controller: 'ArenaController as AC'
      })
      .otherwise('/', {
        templateUrl: './views/info.html',
        controller: 'InfoController as infoC'
      });
});
