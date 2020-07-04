/// <reference path="angular.js" />
var myApp = angular.module('homePageApp', []);

myApp.controller('testController', function ($scope, $http) {

    //$scope.employeeList = [];

    $http.get('/api/UserApi').then(function (output) {
        $scope.employeeList = output.data;
    });

    $scope.countryList = ["India", "China", "Japan", "US", "UK"];

    $scope.onCountryChange = function () {
        alert('Selected Country is : ' + $scope.selectedCountry);
    };

    $scope.countryList_1 = [
        {
            Id: 101,
            Name:'India'
        },
        {
            Id: 102,
            Name:'China'
        },
        {
            Id: 103,
            Name:'Japan'
        },
        {
            Id: 104,
            Name:'US'
        }
    ];

    $scope.onCountryChange_1 = function () {
        alert('Selected Country is : ' + $scope.selectedCountry_1);
    };

    $scope.testClick = function () {
        alert($scope.gender);
    };

    $scope.gender = 'Male';
});