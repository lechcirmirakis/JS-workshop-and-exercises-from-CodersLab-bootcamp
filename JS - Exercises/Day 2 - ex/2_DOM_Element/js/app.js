document.addEventListener("DOMContentLoaded", function() {

    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

console.log("--------------------> Z a d a n i e 1 z wykl  <---------------");

    console.log(links);

    function getDatasInfo(elements) {
        var linksData = [];
        for (var i = 0; i < elements.length; i++) {
            linksData.push(elements[i].dataset.color);
        }
        return linksData
    };
    console.log(getDatasInfo(links));

console.log("--------------------> Z a d a n i e 1  <---------------");

    console.log(homeElement);

    console.log(childElements); // tablica
    for (var i = 0; i < childElements.length; i++) {
        console.log(">>>>> "+childElements[i].tagName);
        console.log(">>>>> "+childElements[i].className);
    }
    console.log(banner);

    console.log(blocks); // tablica
    for (var i = 0; i < blocks.length; i++) {
        console.log(">>>>> "+blocks[i].tagName);
        console.log(">>>>> "+blocks[i].className);
    }

    console.log(links); // tablica
    for (var i = 0; i < links.length; i++) {
        console.log(">>>>> "+links[i].tagName);
        console.log(">>>>> "+links[i].className);
    }

console.log("--------------------> Z a d a n i e 2  <---------------");

    for (var i = 0; i < blocks.length; i++) {
        console.log(blocks[i].innerHTML); // zwraca kod html znajdujacy sie w szukanym elemencie
        console.log(blocks[i].outerHTML); // zwraca kod html znajdujacy sie w szukanym elemencie wraz z tagiem tego elementu
    }


    for (var i = 0; i < blocks.length; i++) {
        console.log(blocks[i].innerHTML = ("<h2>Nowa wartość diva o klasie blocks</h2>")); // zmienil sie cały kod (wraz z tagami) zawierajacy sie w danym elemencie
        console.log(blocks[i].outerHTML);
    }

console.log("--------------------> Z a d a n i e 3  <---------------");

    var mainFooter = document.getElementById('mainFooter');

        function getId(element) {
            console.log(element.id);
        };

        getId(mainFooter);

console.log("--------------------> Z a d a n i e 4  <---------------");

    function getTags(elements) {
        var tagsName = [];
        for (var i = 0; i < elements.length; i++) {
            tagsName.push(elements[i].tagName);
        }
        return tagsName
    };

    console.log(getTags(childElements));

console.log("--------------------> Z a d a n i e 5  <---------------");

    function getClassInfo(element) {
        var classNames = [];
        classNames.push(element.className);
        return classNames
    };
    console.log(getClassInfo(banner));

console.log("--------------------> Z a d a n i e 6  <---------------");

    var navLi = document.querySelectorAll('nav li');
    console.log(navLi);

    function setDataDirection(elements) {
        for (var i = 0; i < elements.length; i++) {
            if (typeof elements[i].dataset.direction === "undefined") {
                elements[i].dataset.direction = "top"
            }
        }
    };

    for (var i = 0; i < navLi.length; i++) {
        console.log(navLi[i]);
    }
    setDataDirection(navLi);

});
