document.addEventListener('DOMContentLoaded', function() {

  var span = document.querySelector('span');
  var divs = document.querySelectorAll('div');

  for (var i = 0; i < divs.length; i++) {

    divs[i].addEventListener('mouseover', function(event) {
      span.innerText = this.id;
    });

    divs[i].addEventListener('mouseover', function(event) {
      this.style.width = this.dataset.size + "px";
      this.style.height = this.dataset.size + "px";
    });

    divs[i].addEventListener('mouseout', function(event) {
      this.removeAttribute('style');
    });

  }

});
