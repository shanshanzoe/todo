/**
 * Created by shanshan on 9/30/15.
 */
var app = angular.module('myTodoList', ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
        .when('/:taskId',{controller:'myTodoListCtrl',templateUrl:'index.html'})


});

