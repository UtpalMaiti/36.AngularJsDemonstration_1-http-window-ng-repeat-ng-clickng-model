/// <reference path="angular.js" />
var app = angular.module('testApp', []);

app.controller('loginController', function ($scope,$http,$window) {
    //alert('Welcome to LoginController');

    $scope.onLogIn = function () {
        //alert('UserName is : ' + $scope.username);
        console.log($scope.loginInfo);

        //Below Code will be sending a Post Request to the Specified URL by Passing $scope.loginInfo as the Object
        $http.post('/api/UserApi', $scope.loginInfo).then(function (result) {
            if (result.data) {
                //alert('Successful LogIn');
                $window.location.href = 'HomePage.html';
            }
            else
            {
                alert('Invalid UserName or Password');
            }
        });

    };


});

app.controller('demoController', function () {
    alert('Welcome to Demo Controller');
});