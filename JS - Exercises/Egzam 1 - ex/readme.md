<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# JavaScript &ndash; egzamin

## Wytyczne

1. Stwórz [**fork**][forking] repozytorium z tym egzaminem.
2. [**Sklonuj**][ref-clone] repozytorium na swój komputer.
3. [**Skomituj**][ref-commit] zmiany do swojego repozytorium.
4. [**Wypchnij**][ref-push]  zmiany do swojego repozytorium na GitHubie.
5. [Stwórz **pull request**][pull-request] do oryginalnego repozytorium, gdy skończysz zadanie.

## Uwagi

* Zadania te są testowane za pomocą specjalnych testów automatycznych. Jeśli więc w zadaniu jest wspomniane, aby funkcja zwracała wynik to powinna zwracać (wyświetlanie w konsoli pomaga w sprawdzeniu jednak nie zwraca wartości). Jeśli w treści zadania jest wspomniane, aby taki konkretny tekst został wypisany/zwrócony, to powinien być wypisany/zwrócony dokładnie taki sam tekst jak w treści zadania.

* Odpowiedzi do zadań 1&ndash;2 wpisz w pliku **zadanie01_02.txt**.
Resztę zadań rozwiąż w odpowiednich plikach **js**.
Nie zmieniaj nic w plikach HTML.

* Zawsze sprawdź, czy Twoje rozwiązanie działa.


### Pamiętaj, że zadanie jest __niezaliczone__ jeżeli:
- nie zastosujesz się do poleceń! :bomb: :bomb: :bomb:
- plik JavaScript zawiera błędy na poziomie kompilacji.

---------------------------------------------------------------------

## Zadanie 1
(2 pkt)

Co to jest propagacja eventów? Jakie znasz typy propagacji? Czym się od siebie różnią?


## Zadanie 2

(1 pkt)

Wytłumacz, dlaczego dobrze jest umieszczać kod JavaScript w następującej funkcji:

  ```
  document.addEventListener('DOMContentLoaded', function() {
    ... //JS code goes here
  }
  ```

Co się może stać, jeśli w powyższej funkcji kodu JavaScript nie umieścimy?

## Zadanie 3

(3 pkt)

Napisz funkcję ```bigestSumOfTwoElements(array)```, która przyjmuje tablicę z liczbami i **zwraca** sumę dwóch największych elementów z tej tablicy.
Dla uproszczenia możemy założyć, że przekazana tablica zawiera wyłącznie liczby.

* Jeżeli tablica zawiera tylko jeden element, funkcja powinna zwrócić wartość tego elementu.
* Jeżeli tablica zawiera zero elementów, funkcja powinna zwrócić wartość logiczną```false```.

Przykład:
```Javascript
bigestSumOfTwoElements([1,2,3,4]) // => 7
bigestSumOfTwoElements([]) // => false
bigestSumOfTwoElements([76]) // => 76
bigestSumOfTwoElements([23,45,17,12]) // => 68
```

## Zadanie 4

(5 pkt)

 - Nie używaj eventu DOMContentLoaded. Skrypt jest wczytany do pliku html przed końcem body.
 - Do każdego podpunktu stwórz odpowiednią funkcję o nazwie podanej w treści zadania.
 - Każda funkcja niech **zwraca** tablicę wypełnioną odpowiednimi elementami. ( Pamiętasz, że zwracanie, a wyświetlanie to różnica? )


 Wykonaj następujące polecenia:

* **1. Szukanie nazw tagów:**
   - znajdź wszystkie elementy o **klasie** ```sample_class```,
   - stwórz funkcję ```getTagsOfElements(elements)``` do której przekaż jako argument znalezione elementy,
   - stwórz w funkcji tablicę i wypełnij ją nazwami tagów. Pobierz je z elementów przekazanych jako argument.
   - zwróć tablicę.


* **2. Szukanie nazw klas:**
  - Znajdź element o **id** ```sample_id```.
  - stwórz funkcję ```getClassesOfElement(element)``` do której przekaż jako argument znaleziony element.
  - stwórz w funkcji tablicę i wypełnij ją nazwami klas. Pobierz klasy z przekazanego jako argument elementu.
  - zwróć tablicę.


* **3. Szukanie tekstu:**
  - Znajdź wszystkie elementy __listy__ znajdujące się w elemencie o **klasie** ```sample_class_2```,
  - stwórz funkcję ```getInnerTextsOfElements(elements)```, do której przekaż jako argument znalezione elementy.
  - stwórz w funkcji tablicę i wypełnij ją tekstami pobranymi z elementów przekazanych jako argument.
  - zwróć tablicę.


* **4. Szukanie adresów linków:**
  - Znajdź wszystkie linki,
  - stwórz funkcję ```getAddressesOfElements(elements)```, do której przekaż jako argument znalezione elementy.
  - stwórz w funkcji tablicę i wypełnij ją adresami pobranymi z elementów przekazanych jako argument.
  - zwróć tablicę.


* **5. Szukanie tagów dzieci:**
    - Znajdź wszystkie dzieci elementu o **klasie** ```sample_class_3```,
    - do funkcji, która wyszukuje tagi elementów, przekaż jako argument, znalezione dzieci.



## Zadanie 5

(3 pkt)

Do wszystkich guzików znajdujących się na stronie dopisz nasłuchiwanie zdarzeń, które po naciśnięciu spowoduje, że na **divie** pokaże się tekst trzymany w ```data-text```. Korzystaj z JavaScriptu.

## Zadanie 6

(6 pkt)

Na stronie znajduje się lista zakupów. Popatrz na HTML i zobacz jak lista jest zbudowana. Dopisz odpowiednią obsługę eventów tak aby:

- Po kliknięciu przycisku pierwszego do listy został dopisany nowy produkt - ```chleb```.
- Po kliknięciu przycisku drugiego z listy był usuwany ostatni element.
- Po kliknięciu przycisku trzeciego na końcu listy był dodawny nowy produkt, który jest klonem drugiego produktu.

__Powodzenia :)__




<!-- Links -->
[forking]: https://guides.github.com/activities/forking/
[ref-clone]: http://gitref.org/creating/#clone
[ref-commit]: http://gitref.org/basic/#commit
[ref-push]: http://gitref.org/remotes/#push
[pull-request]: https://help.github.com/articles/creating-a-pull-request
