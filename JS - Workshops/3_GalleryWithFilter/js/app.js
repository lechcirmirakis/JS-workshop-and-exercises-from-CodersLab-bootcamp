document.addEventListener('DOMContentLoaded', function() {

    var images = document.querySelectorAll('img');
    var hideButton = document.querySelector('#hideButton');
    var showButton = document.querySelector('#showButton');
    var input = document.querySelector('#tagInput');
    var inputText = "";

    showButton.addEventListener('click', function(event) {
        inputText = input.value
        for (var i = 0; i < images.length; i++) {
            if (images[i].dataset.tag.indexOf(inputText) != -1) {
                images[i].classList.remove('invisible');
            }
        }
    });

    hideButton.addEventListener('click', function(event) {
        for (var i = 0; i < images.length; i++) {
            inputText = input.value
            if (images[i].dataset.tag.indexOf(inputText) != -1) {
                images[i].classList.add('invisible');
            }
        }
    });
});
