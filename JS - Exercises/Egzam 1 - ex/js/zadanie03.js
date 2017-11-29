document.addEventListener("DOMContentLoaded", function(event) {
  // funkcja sortujaca tablice od najwiekszej do najmniejszej, i zwraca dwa najwieksze elementy
  (function(array) {
    var sum = 0;
    array.sort(function(a, b) {
      return b - a
    });
    if (array.length == 1) {
      sum = array[0];
    } else if (array.length == 0) {
      sum = false;
    } else {
      sum = array[0] + array[1];
    }
    console.log(sum);
  }([1, 2, 4, 5, 10, 15]));
});
