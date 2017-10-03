document.addEventListener('DOMContentLoaded', function() {

    var button = document.querySelector('button');
    var tableRow = document.querySelector('table').lastElementChild;

    var team1name = document.getElementById('team1');
    var team2name = document.getElementById('team2');
    var team1points = document.getElementById('points1');
    var team2points = document.getElementById('points2');
    var errorMsg = document.createElement('div');
    errorMsg.style.color = "red";
    var formDiv = document.querySelector('.panel-body');
    formDiv.appendChild(errorMsg);


    button.addEventListener('click', function(event) {
        event.preventDefault();
        if (team1name.value.length === 0 || team2name.value.length === 0 || team1points.value.length === 0 || team2points.value.length === 0) {
            errorMsg.style.display = "block"
            errorMsg.innerText = "Wypełnij wszystkie pola!"
        }
        else if (team1name.value === team2name.value) {
            errorMsg.style.display = "block"
            errorMsg.innerText = "Nie możesz wpisać dwóch takich samych drużyn!"
        }
        else if (team1points.value < 0 || team2points.value < 0) {
            errorMsg.style.display = "block"
            errorMsg.innerText = "Liczba goli nie możę być ujemna!"
        }
        else {
            var newTableRow = tableRow.lastElementChild.cloneNode(true);
            newTableRow.children[0].innerText = team1name.value;
            newTableRow.children[1].innerText = team2name.value;
            newTableRow.children[2].innerText = team1points.value +" - "+team2points.value;
            tableRow.appendChild(newTableRow);
            errorMsg.style.display = "none"
        }

    });

});
