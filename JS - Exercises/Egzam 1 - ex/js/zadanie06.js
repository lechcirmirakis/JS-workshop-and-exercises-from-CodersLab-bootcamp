document.addEventListener('DOMContentLoaded', function() {

  var button_1 = document.querySelector('#button-1');
  var button_2 = document.querySelector('#button-2');
  var button_3 = document.querySelector('#button-3');
  var list = document.querySelector('#shopping-list');

  button_1.addEventListener('click', function() {
    var newLi = document.createElement('li');
    newLi.innerText = "Chleb";
    list.appendChild(newLi);
  });

  button_2.addEventListener('click', function() {
    var lastChild = list.lastElementChild;
    lastChild.parentElement.removeChild(lastChild);
  });

  button_3.addEventListener('click', function() {
    if (list.children.length > 2) {
      var newLi = list.children[1].cloneNode(true);
      list.appendChild(newLi);
    } else {
      console.log("niema czego kopiowac :)");
    }
  });

});
