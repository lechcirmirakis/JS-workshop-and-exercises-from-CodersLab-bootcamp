document.addEventListener('DOMContentLoaded', function() {

  var buttons = document.getElementsByTagName('button');
  var div = document.getElementById('container');

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {

      div.innerText = this.dataset.text;

    });
  }

});
