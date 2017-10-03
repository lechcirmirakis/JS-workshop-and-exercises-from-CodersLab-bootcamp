document.addEventListener('DOMContentLoaded', function() {

    var button = document.querySelector('button');
    var email = document.getElementById('email');
    var errorMsg = document.querySelector('.error-message');
    var name = document.querySelector('#name');
    var surname = document.querySelector('#surname');
    var pass1 = document.querySelector('#pass1');
    var pass2 = document.querySelector('#pass2');
    var checkbox = document.querySelector('#agree');
    errorMsg.style.color = "red";

    button.addEventListener('click', sendForm);

    function sendForm(event) {
        if (email.value.length == 0) {
            event.preventDefault();
            errorMsg.innerText = "Wpisz adres email"
        }
        else if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
            event.preventDefault();
            errorMsg.innerText = "Email musi posiadać znaki @ i ."
        }
        else if (name.value.length < 4) {
            event.preventDefault();
            errorMsg.innerText = "Twoje imię jest za krótkie"
        }
        else if (surname.value.length < 6) {
            event.preventDefault();
            errorMsg.innerText = "Twoje nazwisko jest za krótkie"
        }
        else if (pass1.value !== pass2.value || (pass1.value.length == 0 || pass2.value.length == 0)) {
            event.preventDefault();
            errorMsg.innerText = "Hasła nie są takie same lub puste "
        }
        else if (!checkbox.checked) {
            event.preventDefault();
            errorMsg.innerText = "Musisz zaakceptować warunki"
        }
    }
});
