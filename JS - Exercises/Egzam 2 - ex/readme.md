<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# JavaScript &ndash; egzamin poprawkowy

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

Wytłumacz, czym jest słowo kluczowe **this**. Kiedy można go używać?

## Zadanie 2
(1 pkt)

Wyjaśnij różnicę między `==` a `===`.

## Zadanie 3

(3 pkt)

Napisz funkcję `longestWord(stringToCheck)`, która ma zwracać długość najdłuższego słowa znajdującego się w podanym napisie. 

- Jeżeli napis składa się tylko z jednego słowa, to funkcja ma zwrócić jego długość.
- Jeżeli funkcji zostanie przekazany inny typ danych niż napis &ndash; powinna zwrócić wartość wartość logiczną false **false**.

Przykład:
  ```JavaScript
  longestWord("Ala ma kota");                // => 4
  longestWord("Lorem ipsum dolor sit amet"); // => 5
  longestWord("test");                       // => 4
  longestWord(12);                           // => false
  ```

## Zadanie 4

(5 pkt)

 - Nie używaj eventu DOMContentLoaded. Skrypt jest wczytany do pliku html przed końcem body.
 - Do każdego podpunktu stwórz odpowiednią funkcję o nazwie podanej w treści zadania.
 - Każda funkcja niech **zwraca** tablicę wypełnioną odpowiednimi elementami. ( Pamiętasz, że zwracanie, a wyświetlanie to różnica? )


 Wykonaj następujące polecenia:

* **1. Szukanie id:**
   - znajdź wszystkie elementy o **klasie** ```sample_class```,
   - stwórz funkcję ```getIdOfElements(elements)``` do której przekaż jako argument znalezione elementy,
   - stwórz w funkcji tablicę i wypełnij ją identyfikatorami. Pobierz je z elementów przekazanych jako argument.
   - zwróć tablicę.


* **2. Dodawanie klasy:**
  - Znajdź element o **id** ```sample_id```.
  - stwórz funkcję ```addClass(element)``` do której przekaż jako argument znaleziony element.
  - nich funkcja dodaje do elementu przekazanego jako parametr klasę ```myNewClass```.


* **3. Szukanie tekstu:**
  - Znajdź wszystkie elementy znajdujące się w **pierwszym dziecku (index zero)** elementu o **klasie** ```sample_class_2```,
  - stwórz funkcję ```getInnerTextsOfElements(elements)```, do której przekaż jako argument znalezione elementy.
  - stwórz w funkcji tablicę i wypełnij ją tekstami pobranymi z elementów przekazanych jako argument.
  - zwróć tablicę.


* **4. Szukanie adresów linków:**
  - Znajdź wszystkie linki,
  - stwórz funkcję ```getAddressesOfElements(elements)```, do której przekaż jako argument znalezione elementy.
  - stwórz w funkcji tablicę i wypełnij ją adresami pobranymi z elementów przekazanych jako argument.
  - jeśli atrybut **href** elementu jest pusty, nie dodawaj tej wartości do nowej tablicy.
  - zwróć tablicę.


* **5. Szukanie tagów dzieci:**
  - Znajdź wszystkie dzieci elementu o **klasie** ```sample_class_3```,
  - stwórz funkcję ```changeChildren(elements)```, do której przekaż jako argument znalezione elementy.
  - niech funkcja zmieni tekst wszystkich elementów przekazanych jako arugment na ```Jestem dzieckiem x``` (pod ```x``` postaw odpowieni numer - zacznij liczyć od 1).

## Zadanie 5

(3 pkt)

Na stronie znajduje się kilka **divów** i **span**. Dopisz do nich takie nasłuchiwania zdarzeń, które spowodują, że:

1. Po najechaniu kursorem na **diva**, powinien on zmienić swoją szerokość i wysokość na wartość, którą trzyma w ```data-size```.
2. Po zjechaniu kursorem z **diva** powinien się on wrócić do swoich podstawowych rozmiarów.
3. Gdy mysz jest nad danym elementem, to **span** powinien pokazywać **id** tego elementu.

## Zadanie 6

(6 pkt)

Dopisz nasłuchiwanie zdarzeń do formularza reagujący na wysłanie formularza. Gdy nastąpi zdarzenie, funkcja wywołana przez zdarzenie ma:

1. Zapobiegać przeładowaniu strony.
2. Sprawdzić, czy długość danych w polu email jest dłuższa niż pięć znaków i czy zawiera w sobie znak `@`. Jeżeli warunek nie jest spełniony, to do **diva** o **klasie** ```error_message``` wstaw paragraf z wiadomością **Zły mail**.
3. Sprawdzić, czy wartości pól ```Hasło``` i ```Hasło2``` są identyczne. Jeżeli warunek nie jest spełniony, to do **diva** o **klasie** ```error_message``` wstaw paragraf z wiadomością **Błędne hasła**.
4. Sprawdzić, czy została wybrana poprawna płeć (poprawnymi są wszystkie wybory poza pierwszym).
5. Jeżeli wszystkie warunki są spełnione, wyświetl w konsoli wszystkie informacje z formularza, a w **divie** o **klasie**  ```success_message``` wstaw tekst **Udana rejestracja**.

Pamiętaj: jeśli wszystkie warunki nie są spełnione, **div** o klasie ```error_message``` powinien mieć trzy paragrafy z odpowiednimi komunikatami.


<!-- Links -->
[forking]: https://guides.github.com/activities/forking/
[ref-clone]: http://gitref.org/creating/#clone
[ref-commit]: http://gitref.org/basic/#commit
[ref-push]: http://gitref.org/remotes/#push
[pull-request]: https://help.github.com/articles/creating-a-pull-request
