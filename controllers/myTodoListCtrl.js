/**
 * Created by shanshan on 9/30/15.
 */
app.controller('myTodoListCtrl', function($scope, $rootScope, $routeParams, $location, taskFactory){
    $rootScope.isViewing=true;
    $rootScope.allTasks=taskFactory.getTasks();

    $scope.addTask = function(){
        taskFactory.addTask($scope.task);
        $scope.task='';
    }

    $scope.clearTask=function(){
        $scope.task='';
    }

    $scope.editTask=function(id){
        //var taskId = $routeParams.taskId;
        //if(taskId !=null || taskId != undefined){
        //    var task = taskFactory.getTaskById(taskId);
        //    task=$rootScope.task;
        //}
        //$location.path('#/')

          var task = taskFactory.getTaskById(id);
          $scope.task=task;

        $scope.task.taskName = task.taskName;
        $scope.task.taskStatus =task.taskStatus;

    }


});