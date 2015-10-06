/**
 * Created by shanshan on 9/30/15.
 */
app.controller('myTodoListCtrl', function($scope, $location, taskFactory){
    $scope.isViewing=false;
    $scope.isDisabled=false;
    $scope.format='M/d/yy';
    $scope.allTasks=taskFactory.getTasks();
    $scope.task={taskId:0, taskName: "", taskStatus: 'active'};
    $scope.task.taskId=taskFactory.getLength();
    $scope.showTasks=$scope.allTasks;
    $scope.sequence=0;



    $scope.addTask = function(){
        //var task = $scope.task;
        //task.taskStatus=$scope.task.taskStatus;
        taskFactory.addTask($scope.task);
        $scope.task={taskId:0, taskName: "", taskStatus: 'active'};
        $scope.task.taskId=taskFactory.getLength();
        switch($scope.sequence) {
        case 0:
            break;

        case 1:
            var activeTasks = $scope.allTasks.filter(function(element){
                return element.taskStatus=='active';
            });
            $scope.showTasks=activeTasks;

            break;

        case 2:
            var completedTasks = $scope.allTasks.filter(function(element){
                return element.taskStatus=='completed';
            });
            $scope.showTasks=completedTasks;

        }


    }

    $scope.clearTask=function(){
        $scope.isViewing=false;
        $scope.task.taskName="";
        $scope.task.taskStatus="active";

    }

    $scope.updateTask=function(){
        $scope.isViewing=false;
        $scope.task='';
        $scope.isDisabled=false;
    }

    $scope.editTask=function(id){
          $scope.isDisabled=true;
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

    $scope.showAll=function(){
        $scope.showTasks= $scope.allTasks;
        $scope.sequence=0;

    }

    $scope.showActive=function(){
         var activeTasks = $scope.allTasks.filter(function(element){
            return element.taskStatus=='active';
        });
        $scope.showTasks=activeTasks;
        $scope.sequence=1;
    }

    $scope.showCompleted=function(){

        var completedTasks = $scope.allTasks.filter(function(element){
            return element.taskStatus=='completed';
        });

        $scope.showTasks=completedTasks;
        $scope.sequence=2;

    }

    $scope.switchOrder=function(){
        var fromId = $scope.fromId;
        var toId = $scope.toId;


        var fromTask = taskFactory.getTaskById(fromId);
        var toTask = taskFactory.getTaskById(toId);

        alert(fromTask.taskName);

        var temp = fromTask.taskName;
        fromTask.taskName = toTask.taskName;
        toTask.taskName = temp;

        temp = toTask.taskStatus;
        toTask.taskStatus=fromTask.taskStatus;
        fromTask.taskStatus=temp;

        //toTask = {taskId: toId, taskName: fromTask.taskName, taskStatus: fromTask.taskStatus };
        //fromTask = { taskId: fromId, taskName: toTask.taskName, taskStatus: toTask.taskStatus};

       //$scope.allTasks = taskFactory.getTasks();

    }





});