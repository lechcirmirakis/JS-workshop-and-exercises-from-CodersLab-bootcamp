/*
Zadanie 3
----------
W pliku jest element ul
W pliku xxx.html jest element ul
a) Dodaj mu klasę .menu
b) pierwszemu LI w tym ul dodaj klasę .first
c) ostatniemu LI w tym ul dodaj klasę .last
d) trzeciemy LI w tym ul ustaw klasę .active
d) trzeciemu LI w tym ul ustaw za pomocą JS kolor tekstu na #ffffff
e) każdemu linkowi w tym menu ustaw atrybut title="Przejdź na stronę ..." gdzie ... pobierzesz z środka linka
    (dla przykładu <a href="">Start</a> powinien zmienić się w <a href="" title="Przejdź na stronę Start">Start</a>)
f) za pomocą JS każdemu linkowi w tym ul ustaw atrybut href na #. Po co to robimy? Czy jest alternatywna metoda?
g) Dodaj do każdego linka w ul zdarzenie CLICK. Po kliknięciu powinien pojawić się alert
z tekstem Kliknięto ... z tekstem, który widnieje na linku (np "Kliknięto Start")
h) Dla linka w li.active usun zdarzenie click (tak by nie pojawial sie alert po kliknieciu)
*/

document.addEventListener('DOMContentLoaded', function() {

    var ul = document.querySelector('ul');
    ul.classList.add('menu');
    ul.firstElementChild.classList.add('first');
    ul.lastElementChild.classList.add('last');
    ul.children[2].classList.add('active');
    ul.children[2].style.color = '#fff';

    var links = ul.children
    function clickAlert(event) {
        alert('Kliknięto '+this.innerText);
    }
    for (var i = 0; i < links.length; i++) {
        links[i].setAttribute('title', "Przejdź na stronę "+links[i].innerText);
        links[i].setAttribute('href', "#");
        links[i].addEventListener('click', clickAlert);
        links[2].removeEventListener('click', clickAlert);
    }

});
