document.addEventListener('DOMContentLoaded', function() {

    var button = document.querySelector('a');

    button.addEventListener('click', function(e) {
        button.parentElement.removeChild(button);
    });

});
