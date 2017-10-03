/*
Zadanie 1
----------
a) Wygeneruj pod zmienną "tab" 10 elementową tablicę z randomowymi liczbami.
b) Napisz funkcję getMinFromTab, do której przekażesz tablicę z pkt A
c) Funkcja powinna zwrócić najmniejszą liczbę z tablicy
d) Za pomocą console.log wypisz wartosc funkcji
*/

    var tab = [];
        for (var i = 0; i < 10; i++) {
            tab.push(Math.floor( Math.random() * 1000 + 1 ));
        }
        console.log(tab);

        function getMinFromTab(array) {
            array.sort(function(a, b){return a-b});
        }
        getMinFromTab(tab);
        console.log(tab[0]);
