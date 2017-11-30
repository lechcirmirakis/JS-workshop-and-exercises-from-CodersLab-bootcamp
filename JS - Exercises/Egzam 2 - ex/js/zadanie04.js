// 1 Szukanie id:
var docs = document.querySelectorAll('.sample_class');

function getIdOfElements(elements) {
  var tab = [];
  for (var i = 0; i < elements.length; i++) {
    tab.push(elements[i].id)
  }

  return tab

};

console.log(getIdOfElements(docs));

// 2 Dodawanie klasy

var sample_id = document.querySelector('#sample_id');

function addClass(element) {
  element.classList.add('myNewClass');
  return element
}

console.log(addClass(sample_id));

// 3 Szukanie tekstu:

var child = document.querySelector(".sample_class_2").firstElementChild.children;

function getInnerTextsOfElements(elements) {
  var tab = [];
  for (var i = 0; i < elements.length; i++) {
    tab.push(elements[i].innerText);
  }
  return tab
}

console.log(getInnerTextsOfElements(child));

//
