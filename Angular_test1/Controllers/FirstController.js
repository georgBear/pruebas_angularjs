
//Creating the module
var demoApp = angular.module('demoApp', []);

//Creating the controller inside of the just created demoApp module
var controllers = {};
controllers.SimpleController = function ($scope) {
    $scope.persons = [
        { name: 'John Smith', city: 'Manhattan' },
        { name: 'John Doe', city: 'Shanghai' },
        { name: 'Jane Doe', city: 'Montreal' }
    ];
};

demoApp.controller(controllers);