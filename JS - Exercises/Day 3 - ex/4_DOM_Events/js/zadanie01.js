document.addEventListener("DOMContentLoaded", function () {

    var menu = document.querySelector("#menu");
    var paragraf = document.querySelector("p");

    menu.classList.add("menu");
    paragraf.innerHTML = "A to jest paragraf w zadaniu 1";

});



// po przeniesieniu <script> do sekcji head skrypt nie bedzie działał, ponieważ
// wywołuje się zanim drzewo DOM zostanie wczytane, niema jak znaleźć szykanych elementów

// Po dodanie eventu DOMContentLoaded, skryp wczytuje sie prawidłowo, jest to event założony
// na cały dokument, który mówi że funkcje wewnątrz tego eventu będą się wywoływać
// dopiero po załadowaniu całego drzewa DOM
