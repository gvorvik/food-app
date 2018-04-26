console.log('Client.js is loaded');

var app = angular.module('FoodApp', []);

app.controller('FoodAppController', function() {
    var self = this;
    self.message = "Hello World";
});
