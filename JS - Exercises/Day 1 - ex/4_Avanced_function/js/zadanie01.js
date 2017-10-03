/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


// Tworze funkcje jeden, jest to funkcja główna, nie ma dostępu do zmiennych funkcji które są w niej zagnieżdzone
function jeden() {

    // Tworze zmienną lokalną do której będą miały dostęp wszystkie funkcje zagnieżdzone
    var zmienna1 = 1;

    //Tworze funkcje która jest zagnieżdzona w funkcji jeden, może korzystać ze zmiennych w niej stworzonych
    function dwa() {

        //Wyświetla zmienną zmienna1, która jest ustalona w funkcji jeden
        console.log(zmienna1);

        //Tworze zmienna2 zagnieżdzona w funkcji dwa
        var zmienna2 = 3;
    }

    //Odpala się funkcja dwa która nam wyswietli zmienna1 i stworzy w sobie zmienna2
    dwa();

    // Tutaj będzie błąd bo zmienna2 stworzona jest w funkcji dwa które jest zagnieżdzona wiec funkcja 1 niema do niej dostępu
    console.log(zmienna2)
}

//PO odpaleniu funkcji jeden wystąpi błąd nie zdefiniowanej zmiennej2
jeden()
