document.addEventListener('DOMContentLoaded', function() {

    var boxes = document.querySelectorAll('div');
    console.log(boxes);

    for (var i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('mouseover', function(e) {
            var li = this.firstElementChild.children
            li[1].style.backgroundColor = 'green'
            li[2].style.backgroundColor = 'green'
            li[3].style.backgroundColor = 'green'
            this.firstElementChild.firstElementChild.style.backgroundColor = 'red';
            this.firstElementChild.lastElementChild.style.backgroundColor = 'blue';
        });
    }

});
