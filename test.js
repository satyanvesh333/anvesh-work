var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $http.get("external.json").then(function (response) {
        $scope.myWelcome = response.data;
        $scope.firstName = "John";
        $scope.lastName = "Doe";
        
    });
});