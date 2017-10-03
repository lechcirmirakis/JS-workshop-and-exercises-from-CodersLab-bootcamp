document.addEventListener('DOMContentLoaded', function() {

    var button = document.querySelector('a');
    var orderId = document.getElementById('orderId');
    var item = document.getElementById('item');
    var quantity = document.getElementById('quantity');
    var toClone = document.querySelector('table').lastElementChild

    button.addEventListener('click', function(e) {
        var newItem = toClone.lastElementChild.cloneNode(true);
        newItem.children[0].innerText = orderId.value;
        newItem.children[1].innerText = item.value;
        newItem.children[2].innerText = quantity.value;
        toClone.appendChild(newItem);
    });

});
