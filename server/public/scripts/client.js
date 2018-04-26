console.log('Client.js is loaded');

var app = angular.module('FoodApp', []);


//pay attention to setup for $http
//$http is equivalent of ajax for angular
app.controller('FoodAppController', [ '$http', function($http) {
    console.log('FoodAppController has been loaded');
    
    var self = this;
    self.message = "Hello World";

    $http({
        method: 'GET',
        url: '/foods'
    })
    .then(function(response) {
        console.log(response.data);
    })
    .catch(function(error) {
        console.log('error on /foods', error);
    });

}]);
