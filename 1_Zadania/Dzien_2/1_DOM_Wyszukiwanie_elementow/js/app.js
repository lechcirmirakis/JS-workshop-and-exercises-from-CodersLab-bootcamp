document.addEventListener("DOMContentLoaded", function() {

console.log("--------------------> Z a d a n i e 1 z wykl  <---------------");

    var title = document.querySelector('.title');
    console.log(title);

    function getDataAnimation(element) {
        var data = element.dataset.animation
        console.log(data);
    };

    getDataAnimation(title);


console.log("--------------------> Z a d a n i e 1  <---------------");

    // var home = document.getElementById('home');
    var home = document.querySelector('#home');
        console.log(home);

    var li01 = document.querySelector("li:not([data-direction])");
        console.log(li01);

    var block01 = document.querySelector(".block");
        console.log(block01);

console.log("--------------------> Z a d a n i e 2  <---------------");

    var navLi = document.querySelectorAll('nav li');
        console.log(navLi);
        console.log(navLi.length);

    var divp = document.querySelectorAll('div p');
        console.log(divp);
        console.log(divp.length);

    var articleDivs = document.querySelectorAll('article div');
        console.log(articleDivs);
        console.log(articleDivs.length);

console.log("--------------------> Z a d a n i e 3  <---------------");

    var articleFirst = document.querySelector('article.first');
        console.log(articleFirst);

    var afH2 = articleFirst.querySelectorAll('h2');
        console.log(afH2);
        console.log(afH2.length);

    var afOfferts = articleFirst.querySelectorAll('.oferts');
        console.log(afOfferts);
        console.log(afOfferts.length);

    for (var i = 0; i < afOfferts.length; i++) {
        console.log(afOfferts[i].tagName);
    }

    var afDivs = articleFirst.querySelectorAll('div');
        console.log(afDivs);
        console.log(afDivs.length);

    for (var i = 0; i < afDivs.length; i++) {
        console.log(afDivs[i].className);
    }














});
