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
