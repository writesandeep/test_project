'use strict';

angular.module('Authentication', []);
angular.module('Home', []);


var app = angular.module('BasicHttpAuthExample', ['Authentication', 'Home', 'ngRoute', 'ngCookies']);
 
app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/login', {
            controller: 'LoginController',
            templateUrl: 'static/uitemplates/login.html',
            // hideMenus: true
        })
 
        .when('/home', {
            controller: 'HomeController',
            templateUrl: 'static/uitemplates/home.html'
        })
        .when('/contact', {
            controller: 'ContactController',
            templateUrl: 'static/uitemplates/contact.html'
        })
        // .otherwise({ redirectTo: '/login' });
}])

app.controller('LoginController',function($scope){
    $scope.message = 'I am logged in';
});

app.controller('HomeController',function($scope){
    $scope.homemessage = 'i am at home page';
});


app.controller('ContactController',function($scope){
    $scope.contactmessage = 'This is Contact Page';
});