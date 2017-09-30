document.addEventListener('DOMContentLoaded', function() {

    var buttons = document.querySelectorAll('button');
    var field = document.querySelector('.counter');

    var counter = 0;

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(event) {
            counter += 1;
            field.innerText = counter;
        });
    }

});
