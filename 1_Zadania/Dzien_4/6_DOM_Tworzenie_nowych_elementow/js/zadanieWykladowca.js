document.addEventListener('DOMContentLoaded', function() {

    var buttons = document.querySelectorAll('a');

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            var tr = this.parentElement.parentElement;
            tr.parentElement.removeChild(tr);
        });
    }

});
