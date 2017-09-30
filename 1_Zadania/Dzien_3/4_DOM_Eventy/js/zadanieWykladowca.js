document.addEventListener("DOMContentLoaded", function() {

    var parent = document.querySelectorAll('.parent');
    var children = document.querySelectorAll('.children');

    function showChildren(event) {
        var child = this.querySelector('.children');
        child.style.display ='block';
    }

    function hideChildren(event) {
        var child = this.querySelector('.children');
        child.style.display = 'none';
    }

    for (var i = 0; i < parent.length; i++) {
        parent[i].addEventListener('mouseover', showChildren);
        parent[i].addEventListener('mouseout', hideChildren);
    }

    // nie skończone



});
