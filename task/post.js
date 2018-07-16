const app= angular.module("myApp",[]);

app.controller("myCtrl",($http, $scope) =>{
    $http.get('https://jsonplaceholder.typicode.com/posts').then((res) =>{
        $scope.post=res.data
    })
})