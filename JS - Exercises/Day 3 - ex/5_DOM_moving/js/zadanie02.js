document.addEventListener('DOMContentLoaded', function() {

    var buttons = document.querySelectorAll('a');
    console.log(buttons);

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(e) {
            var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            this.parentElement.style.backgroundColor = randomColor;
        });
    }

});
