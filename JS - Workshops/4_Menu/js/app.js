document.addEventListener('DOMContentLoaded', function() {

    var menuLi = document.querySelectorAll('.nav>ul>li');

    for (var i = 0; i < menuLi.length; i++) {

        menuLi[i].addEventListener('mouseover', function() {
            if (this.children.length > 0) {
                this.firstElementChild.style.display = "block";
            }
        });
        menuLi[i].addEventListener('mouseout', function() {
            if (this.children.length > 0) {
                this.firstElementChild.style.display = "none";
            }
        });
    }

});
