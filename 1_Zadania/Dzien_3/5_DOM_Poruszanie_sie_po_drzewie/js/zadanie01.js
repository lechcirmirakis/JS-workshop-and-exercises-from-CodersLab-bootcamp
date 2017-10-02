document.addEventListener('DOMContentLoaded', function() {

    var buttons = document.querySelectorAll('a');
    console.log(buttons);

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(e) {
            this.nextElementSibling.classList.toggle('hidden');
        });
    }

});
