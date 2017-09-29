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







});
