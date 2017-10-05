document.addEventListener('DOMContentLoaded', function() {

    var inputTask = document.getElementById('taskInput');
    var buttonAddTask = document.getElementById('addTaskButton');
    var listTask = document.getElementById('taskList');
    var buttonRemoveFinishedTask = document.getElementById('removeFinishedTasksButton');
    var alert = document.querySelector('.alert');
    var countSpan = document.querySelector('.count>span');
    var counter = 0;
    countSpan.innerText = counter;

    // event for Add Task Button
    buttonAddTask.addEventListener('click', function(event) {

        // First Condition for Task length value
        if (inputTask.value.length >= 5 && inputTask.value.length <= 100) {
            // Add Task Counter
            counter++
            countSpan.innerText = counter;

            // delete alert innerText
            alert.innerText = "";

            // create new elements of ul
            var newTask = document.createElement('li');
            var newH2 = document.createElement('h2');
            var newButtonDelete = document.createElement('button');
            var newButtonComplete = document.createElement('button');

            // event for Delete button
            newButtonDelete.addEventListener('click', function() {
                counter--
                countSpan.innerText = counter;
                this.parentElement.parentElement.removeChild(newTask);
            });

            // event for Complete Button
            newButtonComplete.addEventListener('click', function() {
                this.previousElementSibling.previousElementSibling.classList.toggle('complete_h2');
                if (this.previousElementSibling.previousElementSibling.classList.contains("complete_h2")) {
                     counter--;
                     countSpan.innerText = counter;

                 } else {
                     counter++;
                     countSpan.innerText = counter;
                 }
            });

            newButtonComplete.innerText = "Complete"
            newButtonComplete.classList.add('Complete_button');

            // adds the created elements
            listTask.appendChild(newTask);
            newTask.appendChild(newH2);
            newTask.appendChild(newButtonDelete);
            newTask.appendChild(newButtonComplete);
            newH2.innerText = inputTask.value;
            inputTask.value = "";
            newButtonDelete.innerText = "Delete";

            // event for Remove Finished Task button
            removeFinishedTasksButton.addEventListener("click", function() {
                var toDeleteTask = listTask.querySelectorAll('li');
                for (var i = 0; i < toDeleteTask.length; i++) {
                    if (toDeleteTask[i].firstElementChild.className === "complete_h2") {
                        toDeleteTask[i].parentElement.removeChild(toDeleteTask[i]);
                    }
                }
            });
        }
        // Second Condition for Task length value
        else if (inputTask.value.length < 5) {
            alert.innerText = "Your task is too short, it must have a minimum of 5 characters"
        }
        // Third Condition for Task length value
        else {
            alert.innerText = "Your task is too long, it must have a maximum of 100 characters"
        }
    });
});
