document.addEventListener("DOMContentLoaded", function() {

console.log("--------------------> Z a d a n i e 1 z wykl  <---------------");

    var ex5Li = document.querySelectorAll('.ex5 li');

    //pkt 1
    for (var i = 0; i < ex5Li.length; i++) {
        if (!ex5Li[i].hasAttribute("data-direction")) {
            ex5Li[i].dataset.direction = "up"
        }
    }
    // sprawdzam czy sie "up" dodało
    for (var i = 0; i < ex5Li.length; i++) {
        console.log(ex5Li[i].dataset.direction);
    }

    //pkt 2
    var ex5Li2n = document.querySelectorAll('.ex5 li:nth-of-type(2n)');

    for (var i = 0; i < ex5Li2n.length; i++) {
        ex5Li2n[i].style.backgroundColor = "green";
    }

    //pk3
    var ex5Li5 = document.querySelector('.ex5 li:nth-of-type(5)');
    ex5Li5.classList.add('big');

    //pk4
    var ex5Li3n = document.querySelectorAll('.ex5 li:nth-of-type(3n)');

    for (var i = 0; i < ex5Li3n.length; i++) {
        ex5Li3n[i].style.borderBottom = "3px solid black";
    }

console.log("--------------------> Z a d a n i e 1  <---------------");

    var ex1 = document.querySelector('.ex1:nth-of-type(2)');


    // zmieniam szerokość tła dla Chrome
    var chromeBackground = ex1.querySelector('.chrome');
    chromeBackground.style.width = "100px";

    // zmieniam tło dla Edge
    var edgeBackground = ex1.querySelector('.edge');
    edgeBackground.style.backgroundImage = "url(assets/img/edge.png)";

    // zmieniam tło dla Firefoxa
    var firefoxBackground = ex1.querySelector('.firefox');
    firefoxBackground.style.backgroundImage = "url(assets/img/firefox.png)";

    // poprawiam link dla Chrome
    chromeBackground.nextElementSibling.innerText = "Chrome";
    chromeBackground.nextElementSibling.setAttribute('target', "_blank");

    // poprawiam link dla edge
    edgeBackground.nextElementSibling.setAttribute('href', 'https://www.microsoft.com/en-us/windows/microsoft-edge');
    edgeBackground.nextElementSibling.setAttribute('target', "_blank");

    // poprawiam link dla firefoxa
    firefoxBackground.nextElementSibling.setAttribute('target', "_blank");
    firefoxBackground.nextElementSibling.setAttribute('href', 'https://www.mozilla.org/en-US/firefox/?utm_medium=referral&utm_source=firefox-com');
    firefoxBackground.nextElementSibling.innerText = "Firefox";

console.log("--------------------> Z a d a n i e 2  <---------------");

    var name = document.getElementById('name');
    name.innerText = ('Lech Cirmirakis');
    var color = document.getElementById('fav_color');
    color.innerText = ('Błękitny');
    var meal = document.getElementById('fav_meal');
    meal.innerText = ('Ryż Smażony z kurczakiem');

console.log("--------------------> Z a d a n i e 3  <---------------");

    var menuUl = document.querySelector('.ex3 ul');
    menuUl.classList.add('menu');

    var menuLi = document.querySelectorAll('.ex3 li');

    for (var i = 0; i < menuLi.length; i++) {
        if (menuLi[i].className === "error") {
            menuLi[i].classList.remove('error');
        }
        menuLi[i].classList.add('menuElement');
    }

console.log("--------------------> Z a d a n i e 4  <---------------");









});
