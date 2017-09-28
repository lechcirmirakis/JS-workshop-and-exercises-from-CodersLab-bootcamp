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





});
