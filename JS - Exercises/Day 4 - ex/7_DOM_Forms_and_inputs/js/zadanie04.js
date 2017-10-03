document.addEventListener('DOMContentLoaded', function() {

    var cardNumber = document.getElementById('name');
    var cardType = document.getElementById('type');
    var button = document.querySelector('button');
    var errorCardMsg = document.createElement('div');
    errorCardMsg.style.color = "red";
    errorCardMsg.style.paddingTop = "8px";
    var errorCard = document.querySelector('form').firstElementChild;
    errorCard.appendChild(errorCardMsg);
    console.log(errorCard);

    cardNumber.addEventListener('keypress', function() {
        if (cardNumber.value.charAt(0) == 4) {
            cardType.innerText = "Visa"
        }
        else if (cardNumber.value.charAt(0) == 5) {
            cardType.innerText = "Mastercard"
        }
        else if (cardNumber.value.charAt(0) == 3 && (cardNumber.value.charAt(1) == 4 || cardNumber.value.charAt(1) == 7) ) {
            cardType.innerText = "American Express"
        }
        else {
            cardType.innerText = " "
        }
    });

    button.addEventListener('click', function (e) {
        e.preventDefault();
        if (cardNumber.value.length == 0 || cardNumber.value.length == 1) {
            errorCardMsg.innerText = "Wpisz numer karty !"
        }
        else if (cardType.innerText === "Visa" && (cardNumber.value.length < 13 || cardNumber.value.length > 16)) {
            errorCardMsg.innerText = "Wpisałeś "+cardNumber.value.length+" liczby. Numer karty Visa składa się z minimum 13 i maksymalnie 16 liczb. Wpisz prawidłowy numer karty !"
        }
        else if (cardType.innerText === "Mastercard" && cardNumber.value.length != 16) {
            errorCardMsg.innerText = "Wpisałeś "+cardNumber.value.length+" liczby. Numer karty Mastercard składa się z 16 liczb. Wpisz prawidłowy numer karty !"
        }
        else if (cardType.innerText === "American Express" && cardNumber.value.length != 15) {
            errorCardMsg.innerText = "Wpisałeś "+cardNumber.value.length+" liczby. Numer karty American Express składa się z 15 liczb. Wpisz prawidłowy numer karty !"
        }
        else if (cardType.innerText == "") {
            errorCardMsg.innerText = "Wpisz prawidłowy numer karty !"
        }
        else {
            errorCardMsg.innerText = "";
            alert('Dane karty zostały wysłane, dziękujemy');
        }
    });

});
