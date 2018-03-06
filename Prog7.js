const app = angular.module("myApp", []);
app.controller("myCtr", function($scope, $http) {
    $http.get("/AngularJS/Employee.json").then(function(item) {
        $scope.getData = item.data;
    });

    $scope.removeItem = function(x) {
        var removedata = $scope.getData.indexOf(x);
        $scope.getData.splice(removedata, 1)
    }
});
app.filter("writtek", function() {
    return function(input, limit) {
        if (isNaN(limit) || limit == " ") {
            return input;
        } else {
            return input.substring(0, limit).toUpperCase();
        }
    }
});