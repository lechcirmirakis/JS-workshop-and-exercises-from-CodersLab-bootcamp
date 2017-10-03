/*
Zadanie 2
----------
a) Stwórz funkcję getMinFromElements, do której przekażesz nieokreśloną liczbę argumentów będących liczbami
c) Funkcja powinna zwrócić najmniejszą liczbę z tablicy
d) Za pomocą console.warn wypisz wartosc funkcji
*/

function getMinFromElements(arguments) {
    var tab = [];
    for (var i = 0; i < arguments.length; i++) {
        tab.push(arguments[i]);
    }
    var tab2 = tab.sort(function(a, b) {
        return a-b;
    });
    console.log(tab2);
    return tab2[0]
}

console.warn(getMinFromElements([23, 23, 121, 4, 6, 56, 34, 45, 2]));
