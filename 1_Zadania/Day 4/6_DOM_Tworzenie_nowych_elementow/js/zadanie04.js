document.addEventListener('DOMContentLoaded', function () {

    var button = document.querySelector('a');
    var list = document.querySelectorAll('li')
    console.log(list);

    button.addEventListener('click', function() {
        for (var i = 0; i < list.length; i++) {
            list[i].parentElement.removeChild(list[i]);
        }

    });

});
