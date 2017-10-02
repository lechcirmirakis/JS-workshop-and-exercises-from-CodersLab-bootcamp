document.addEventListener('DOMContentLoaded', function() {

    // PKT 1
    var firstElement = document.querySelector('.first').firstElementChild.children[2];
        console.log(firstElement);

    // PKT 2
    var second = document.getElementById('second').parentElement.children[3];
        console.log(second);

    // PKT 3
    var data_ex = document.querySelector('[data-ex="third"]')
    .parentElement.parentElement.lastElementChild.firstElementChild.children[2];
        console.log(data_ex);

    // PKT 4

    var dataPKT4 = document.querySelector('.forth')
    .parentElement.querySelector('article').querySelectorAll('p')[1]
        console.log(dataPKT4);

});
