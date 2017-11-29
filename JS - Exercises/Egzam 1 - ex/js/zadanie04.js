// 1 Szukanie nazw tagów

var sample = document.querySelectorAll('.sample_class');

function getTagsOfElements(element) {
  var tab = [];
  for (var i = 0; i < element.length; i++) {
    tab.push(element[i].tagName);
  }
  return tab
}
console.log(getTagsOfElements(sample));

// 2 Szukanie nazw klas

var sampleID = document.querySelector('#sample_id');

function getClassesOfElement(element) {
  var tab = [];
  tab = element.className;
  return tab
}
console.log(getClassesOfElement(sampleID));

// 3 Szukanie tekstu

var listElements = document.querySelectorAll('.sample_class_2 li')

function getInnerTextsOfElements(element) {
  var tab = [];
  for (var i = 0; i < element.length; i++) {
    tab.push(element[i].innerText);
  }
  return tab
}

console.log(getInnerTextsOfElements(listElements));

// 4 Szukanie adresow linków

var links = document.querySelectorAll('a');

function getAddressesOfElements(element) {
  var tab = [];
  for (var i = 0; i < element.length; i++) {
    if (element[i].hasAttribute('href') != 0) {
      tab.push(element[i].getAttribute('href'));
    }
  }
  return tab
}
console.log(getAddressesOfElements(links));


// 5 Szukanie tagów dzieci

var children = document.querySelector('.sample_class_3').children
console.log(getTagsOfElements(children));
