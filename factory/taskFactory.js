/**
 * Created by shanshan on 9/30/15.
 */
app.factory('taskFactory', function(){
    var obj = {};
    var data=[{taskId:1, taskName: "take a shower", taskStatus: 'active'},{taskId:2, taskName: "take a bath", taskStatus: 'completed'}];

    obj.addTask = function(task){
        //task.taskId=data.length+1;
        data.push(task);

    }

    obj.getTasks=function(){
        return data;
    }


    obj.getTaskById=function(id){
        var task =null;
        for (var i= 0; i<data.length; i++){
            if(data[i].taskId==id){
                task=data[i];
                break;
            }
        }
        return task;
    }

    obj.getLength=function(){
        return data.length+1;
    }

    return obj;

});