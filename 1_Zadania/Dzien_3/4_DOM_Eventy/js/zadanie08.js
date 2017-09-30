document.addEventListener('DOMContentLoaded', function() {

    var height = document.getElementById('windowHeight');
    var width = document.getElementById('windowWidth');

    window.addEventListener('click', function(e) {
        width.innerText = window.innerWidth;
        height.innerText = window.innerHeight;
    });

});
