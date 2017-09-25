console.log("--------------------> Z a d a n i e 1 z wykl <---------------");

    function distFromAvarage(array) {
        var arrSum = 0;
        // petla sumujaca wszystkie elementy tablicy
        for (var i = 0; i < array.length; i++) {
            arrSum += array[i];
        }
        // srednia z elementow tablicy
        var arrAverage = arrSum / array.length;

        // petla zwracajaca roznice miedzy liczba z danej komorki a srednia z tablicy
        // dodatkowy warunek jesli roznica jest ujemna to zamien ja na liczbe dodatnia

        var arrFinish = [];
        for (var i = 0; i < array.length; i++) {
            if (array[i] - arrAverage < 0) {
                arrFinish.push((array[i] - arrAverage) * -1);
            }
            else {
                arrFinish.push(array[i] - arrAverage);
            }
        }
        return arrFinish
    };

console.log(distFromAvarage([1, 2, 3, 4, 5, 6, 7, 8, 9]));

console.log("--------------------> Z a d a n i e 1  <---------------");

    var fruits = ["apple", "banan", "orange", "lemon", "strawberry"];
    console.log("dlugosć tablicy to: " + fruits.length);
    console.log("ostatni element tablicy: " + fruits[4]);

    console.log("Petla wypisujaca wszystkie elementy tablicy: ");

    for (var i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);
    };

console.log("--------------------> Z a d a n i e 3  <---------------");

    function printTable(array) {
        for (var i = 0; i < array.length; i++) {
            console.log(array[i]);
        }
    };
    printTable([1, "second", 3, "fourth", 5, "sixth"]);

console.log("--------------------> Z a d a n i e 4  <---------------");

    function multiply(array) {
        var arrMulti = 1;
        for (var i = 0; i < array.length; i++) {
            arrMulti *= array[i]
        }
        return arrMulti
    }
    console.log(multiply([1, 2, 3, 4, 5]));

console.log("--------------------> Z a d a n i e 5  <---------------");
