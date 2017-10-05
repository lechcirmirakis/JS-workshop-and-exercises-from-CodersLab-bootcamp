document.addEventListener('DOMContentLoaded', function() {

    var tooltip = document.querySelectorAll('.tooltip');

    for (var i = 0; i < tooltip.length; i++) {
        var tooltipBox = document.createElement('span');

        tooltip[i].addEventListener('mouseover', function() {
            tooltipBox.classList.add('tooltipText');
            tooltipBox.innerText = this.dataset.text
            tooltipBox.style.backgroundColor = "green";
            this.appendChild(tooltipBox);
        });

        tooltip[i].addEventListener('mouseout', function() {
            tooltipBox.parentElement.removeChild(tooltipBox);
        });

    }

});
