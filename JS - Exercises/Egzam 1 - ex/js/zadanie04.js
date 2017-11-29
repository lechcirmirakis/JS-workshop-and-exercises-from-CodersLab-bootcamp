// 1 Szukanie nazw tagów

var sample = document.querySelectorAll('.sample_class');

function getTagsOfElements(element) {
  var tab = [];
  for (var i = 0; i < element.length; i++) {
    tab.push(element[i].tagName)
  }
  return tab
}
console.log(getTagsOfElements(sample));

// 2 Szukanie nazw class

var listElements = document.querySelectorAll('.sample_class_2 li')

function getInnerTextsOfElements(element) {
  var tab = [];
  for (var i = 0; i < element.length; i++) {
    tab.push(element[i].innerText)
  }
  return tab
}

console.log(getInnerTextsOfElements(listElements));
