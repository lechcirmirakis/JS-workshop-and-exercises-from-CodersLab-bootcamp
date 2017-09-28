document.addEventListener("DOMContentLoaded", function() {


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













});
