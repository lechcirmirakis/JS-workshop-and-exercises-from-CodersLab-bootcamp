document.addEventListener('DOMContentLoaded', function() {

    var nextButton = document.getElementById('nextPicture');
    var prevButton = document.getElementById('prevPicture');
    var listElements = document.querySelectorAll('li');
    var indexOfImg = 0;

    listElements[indexOfImg].classList.add('visible');

    nextButton.addEventListener('click', function(event) {
        listElements[indexOfImg].classList.remove('visible');
        indexOfImg++
        if (indexOfImg >= listElements.length) {
            indexOfImg = 0;
        }
        listElements[indexOfImg].classList.add('visible');
    });

    prevButton.addEventListener('click', function(event) {
        listElements[indexOfImg].classList.remove('visible');
        indexOfImg--
        if (indexOfImg < 0) {
            indexOfImg = listElements.length - 1;
        }
        listElements[indexOfImg].classList.add('visible');
    });





});
