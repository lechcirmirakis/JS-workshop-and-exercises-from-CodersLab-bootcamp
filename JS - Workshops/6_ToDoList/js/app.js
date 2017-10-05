document.addEventListener('DOMContentLoaded', function() {

    var inputTask = document.getElementById('taskInput');
    var buttonAddTask = document.getElementById('addTaskButton');
    var listTask = document.getElementById('taskList');
    var buttonRemoveFinishedTask = document.getElementById('removeFinishedTasksButton');

    // event for Add Task Button
    buttonAddTask.addEventListener('click', function(event) {
        // create new elementos of ul
        var newTask = document.createElement('li');
        var newH2 = document.createElement('h2');
        var newButtonDelete = document.createElement('button');
        var newButtonComplete = document.createElement('button');

        // event for Complete Button
        newButtonComplete.addEventListener('click', function() {
            this.previousElementSibling.previousElementSibling.classList.toggle('complete_h2');
        });

        newButtonComplete.innerText = "Complete"
        newButtonComplete.classList.add('Complete_button');
        
        // adds the created elements
        listTask.appendChild(newTask);
        newTask.appendChild(newH2);
        newTask.appendChild(newButtonDelete);
        newTask.appendChild(newButtonComplete);
        newH2.innerText = inputTask.value;
        newButtonDelete.innerText = "Delete";

    });

});
