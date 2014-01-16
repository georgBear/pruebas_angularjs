
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
        .when('/jugadores',
            {
                controller: 'JugadoresController',
                templateUrl: '../Partials/View3.html'
            })
        .when('/buscarJugadores',
            {
                controller: 'JugadoresController',
                templateUrl: '../Partials/View4.html'
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

    $scope.addPerson = function () {
        $scope.persons.push({ name: $scope.New.name, city: $scope.New.city });
        $scope.apply;
        console.log("Person length is: " + $scope.persons.length);
        console.log("Person length Added: " + $scope.persons[$scope.persons.length - 1].name + "  -  " + $scope.persons[$scope.persons.length - 1].city);
    }

};

demoApp.factory("Jugadores", function () {
    var Jugadores = {};
    Jugadores.lista = [
        { name: "Samuel J. Fox", posicion: "Jardinero Central" },
        { name: "Ramón Orantes", posicion: "Primera Base" },
        { name: "Manuel Ortiz", posicion: "Short Stop" },
        { name: "Cuco Herrera", posicion: "Pitcher" },
          { name: "Juan Rodriguez", posicion: "Segunda Base" }
    ];
    return Jugadores;
});

controllers.JugadoresController = function ($scope, Jugadores) {
    $scope.jugadores = Jugadores;
    $scope.addJugador = function () {
        Jugadores.lista.push({ name: $scope.Nuevo.name, posicion: $scope.Nuevo.posicion });
        $scope.apply;
        console.log("Person length is: " + Jugadores.lista.length);
        console.log("Person length Added: " + Jugadores.lista[Jugadores.lista.length - 1].name + "  -  " + Jugadores.lista[Jugadores.lista.length - 1].posicion);
    }
}

demoApp.controller(controllers);


