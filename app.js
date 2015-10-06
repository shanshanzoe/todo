/**
 * Created by shanshan on 9/30/15.
 */
var app = angular.module('myTodoList', ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
        .when('/:taskId',{controller:'myTodoListCtrl',templateUrl:'index.html'})


});

app.directive('currentYear',['dateFilter',function(dateFilter){

    function link(scope, element, attrs){

        var format

        function getYear(){
            element.text(dateFilter(new Date(), format))
        }

        scope.$watch(attrs.currentYear, function(val){
            format=val;
            getYear();  //1
        });



    };

    return{
        link:link
    };

}]);
