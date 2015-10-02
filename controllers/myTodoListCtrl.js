/**
 * Created by shanshan on 9/30/15.
 */
app.controller('myTodoListCtrl', function($scope, $routeParams, $location, taskFactory){
    $scope.isViewing=false;
    $scope.allTasks=taskFactory.getTasks();
    $scope.task={taskId:0, taskName: "", taskStatus: 'active'};
    $scope.task.taskId=taskFactory.getLength();


    $scope.addTask = function(){
        //var task = $scope.task;
        //task.taskStatus=$scope.task.taskStatus;
        taskFactory.addTask($scope.task);
        $scope.task={taskId:0, taskName: "", taskStatus: 'active'};
        $scope.task.taskId=taskFactory.getLength();

    }

    $scope.clearTask=function(){
        $scope.task='';
    }

    $scope.updateTask=function(){
        $scope.isViewing=false;
        $scope.task='';
    }

    $scope.editTask=function(id){
          $scope.isViewing=true;
          var task = taskFactory.getTaskById(id);
          $scope.task=task;

        //$scope.task.taskName = task.taskName;
        //$scope.task.taskStatus =task.taskStatus;

    }

    $scope.deleteTask=function(id){
        var task =taskFactory.getTaskById(id);
        task.taskStatus="deleted";


    }





});