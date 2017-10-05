document.addEventListener("DOMContentLoaded", function() {

    var allImg = document.querySelectorAll('li');
    var body = document.querySelector('body');

    for (var i = 0; i < allImg.length; i++) {
        allImg[i].addEventListener('click', function(event) {

            var full = document.createElement('div');
            full.classList.add('fullScreen');

            var imgUrl = document.createElement('img');
            full.appendChild(imgUrl);

            var buttonClose = document.createElement('button');
            buttonClose.classList.add('close');
            buttonClose.innerText = "Close";
            buttonClose.addEventListener('click', function(event) {
                full.parentElement.removeChild(full);
            });

            var url = this.firstElementChild.getAttribute('src');
            full.appendChild(buttonClose);
            body.appendChild(full);
            imgUrl.setAttribute('src', './' + url)
        });
    }

});
