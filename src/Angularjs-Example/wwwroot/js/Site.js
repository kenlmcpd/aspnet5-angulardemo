angular.module('myApp', ['ngSanitize'])
.controller('myController', function ($scope, $timeout) {
    
    $scope.view = "splash";
    $timeout(function () { $scope.view = "page1"; }, 3000);
    
    $scope.setView = function (view) {
        $scope.view = view;
    }
})