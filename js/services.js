myApp.service('urlProvider', [function(){
  var vm=this;
  vm.API_URL = 'http://localhost:3000/api';
}]);


myApp.service('itemService', ['$http', 'urlProvider' ,function($http, urlProvider){
  var vm=this;
  vm.items = [];

  //Will run once. - Use again if item list needs to be refreshed IE: Added item~
  vm.retrieveItems =
    $http.get(urlProvider.API_URL + '/items')
    .then(function(data){
      vm.items = data.data;
    });
}]);

/*************
Implement a Robot service which allows you to post new robots to the server as well as retrieve current robots
**************
GET: urlProvider.API_URL + '/robots'
-The get request only returns an array of item IDs which are attached to the robot.
-You will have to use the itemService to connect information about items with each robot to display total cost / power.

POST: urlProvider.API_URL + '/robots'
**************/
