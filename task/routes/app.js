const app = angular.module('myApp',["ngRoute"]);

app.config( ($routeProvider) =>{
    $routeProvider.when("/login",{
        templateUrl:"views/login.html"
    }).when("/about", {
        templateUrl: "views/about.html"
    }).when("/register", {
        templateUrl: "views/register.html"
    }).otherwise({
        redirectTo: '/login'
    })
})