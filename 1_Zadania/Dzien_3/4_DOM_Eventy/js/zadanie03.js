document.addEventListener("DOMContentLoaded", function () {

    var button_1 = document.getElementById("button1");
    var field_1 = document.querySelector("span.counter:nth-of-type(1)");
    var clickCount_1 = 0;

    function clickCounter_1(event) {
        clickCount_1 += 1;
        field_1.innerText = clickCount_1;
    }

    button_1.addEventListener('click', clickCounter_1);

    // działa tylko jeden button

    // var buttons = document.querySelectorAll('.parent');
    // console.log(buttons);
    // var counter = 1;
    // for (var i = 0; i < buttons.length; i++) {
    //     counter += 1;
    //     buttons[i].querySelector('button')
    //     .addEventListener('click', function(event) {
    //         var span = this.querySelector
    //         this.querySelector('.counter').innerText = counter;
    //     });
    // };
    });
