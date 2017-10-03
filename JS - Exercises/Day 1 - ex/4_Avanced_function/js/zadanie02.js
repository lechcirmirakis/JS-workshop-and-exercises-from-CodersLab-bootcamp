/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

// Tworze funkcje sortArray która będzie miała w sobie kolejne funkcje
function sortArray() {

    //Tworze tablice z różnymi liczbami które będą sortowane (zmienna lokalna)
    var points = [41, 3, 6, 1, 114, 54, 64];

    //Funkcja wyższego rzedu (sort) sortuje podaną tablice, i jako argument przyjmuje drugą funkcje
    points.sort(function(a, b){
        //Funkcja zwraca nam posortowane elementy danej tablicy od najmniejszego do najwiekszego (alfabetycznie)
        return a-b;
    });

    //Funkcja sort zwraca posortowaną tablice
    return points;
}

//Wywołujemy funkcje sortująca tablice
sortArray();
console.log(sortArray());
