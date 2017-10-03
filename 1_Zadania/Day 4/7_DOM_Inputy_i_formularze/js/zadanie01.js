document.addEventListener('DOMContentLoaded', function() {

    var checkbox = document.querySelector('.checkbox input');
    var invoice = document.querySelector('#invoiceData');
    var newInvoice = invoice.cloneNode(true);
    var form = document.querySelector('form');

    invoice.parentElement.removeChild(invoice);

    checkbox.addEventListener('click', function() {

        if (this.checked) {
            form.insertBefore(newInvoice, form.lastElementChild);
        }
        else {
            newInvoice.parentElement.removeChild(newInvoice);
        }
    });

});
