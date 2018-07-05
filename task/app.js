let app = angular.module('myApp', []);

app.controller('myController', ($scope, $http) =>{
   $http.get("data.json").then((item) => {
   $scope.players = item.data;


 })


 $scope.addUsers = () => {
    $scope.players.push({
        name: $scope.newName,
        id : $scope.newId,
        photo: $scope.newPhoto,
         runs: $scope.newRuns
    });
}
$scope.remove = (user) => {
    let removeUser = $scope.players.indexOf(user);
    $scope.players.splice(removeUser,1);
}
})