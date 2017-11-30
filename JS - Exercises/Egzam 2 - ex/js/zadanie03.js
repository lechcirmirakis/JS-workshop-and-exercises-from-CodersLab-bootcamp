function longestWord(stringToCheck, separator) {

  if (typeof stringToCheck != 'string') {
    return false
  } else {
    var arrayOfStrings = stringToCheck.split(separator);
    var tab = [];
    for (var i = 0; i < arrayOfStrings.length; i++) {
      tab.push(arrayOfStrings[i].length);
    }

    tab.sort(function(a, b) {
      return b - a
    });

    return tab[0];
  }

}

console.log(longestWord("Ala ma kota", " "));
console.log(longestWord("Lorem ipsum upa uppapajs", " "));
console.log(longestWord("test", " "));
console.log(longestWord(12, " "));
