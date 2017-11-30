document.addEventListener('DOMContentLoaded', function() {

  var button = document.querySelector('form').lastElementChild;
  var email = document.querySelector('input[type=text]').parentElement.nextElementSibling.nextElementSibling.firstElementChild;
  var errorMsg = document.querySelector('.error_message');
  var name = document.querySelector('input[type=text]');
    errorMsg.style.color = "Red";
  var successMsg = document.querySelector('.success_message');
    successMsg.style.color = "green";
  var pass_1 = document.querySelector('input[type=password]');
  var pass_2 = document.querySelector('input[type=password]').parentElement.nextElementSibling.nextElementSibling.firstElementChild;
  var select = document.querySelector('select');

  button.addEventListener('click', function(event) {
    if (!(email.value.length > 5) || (email.value.indexOf('@') == -1) || email.value.indexOf('.') == -1) {
      event.preventDefault();
      errorMsg.innerText = "Zły mail";

    } else if (pass_1.value !== pass_2.value || (pass_1.value.length == 0 || pass_2.value.length == 0)) {
      event.preventDefault();
      errorMsg.innerText = "Błędne hasła";

    } else if (select.value == "Wybierz płeć") {
      event.preventDefault();
      errorMsg.innerText = "Wybierz płeć";

    } else {
      event.preventDefault();
      successMsg.innerText = "Udana rejestracja";
      errorMsg.innerText = ' ';
      console.log(name.value);
      console.log(email.value);
      console.log(select.value);
      console.log(pass_1.value);
    }
  });

});
