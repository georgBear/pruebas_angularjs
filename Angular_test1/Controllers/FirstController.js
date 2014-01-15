
//Creating the module
var demoApp = angular.module('demoApp', ['ngRoute']);

//Configuring the demoApp module for adding custom routes in order to load partial views
demoApp.config(function ($routeProvider) {
    $routeProvider
        .when('/',
            {
                controller: 'SimpleController',
                templateUrl: '../Partials/View1.html'
            })
        .when('/partial1',
            {
                controller: 'SimpleController',
                templateUrl: '../Partials/View1.html'
            })
        .when('/partial2',
            {
                controller: 'SimpleController',
                templateUrl: '../Partials/View2.html'
            })
        .when('/sameLevel',
            {
                controller: 'SimpleController',
                templateUrl: 'sameLevel.html'
            })
        .otherwise({ redirectTo: '/' });

});

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

function render_view1() {
    
}

function render_view2() {

}