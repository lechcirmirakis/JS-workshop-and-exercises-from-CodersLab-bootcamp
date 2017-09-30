document.addEventListener("DOMContentLoaded", function() {
    var a = document.getElementById("a");
    var b = document.getElementById("b");

    // Tutaj this wskazuje na obiekt document (Ponieważ kontext wywołania funkcji
    // addEventListener to właśnie document)
    console.log("obiekt document: ", this);

    a.addEventListener("click", function(event) {
        // Tutaj this wskazuje na element DOM o id a
        console.log("a: ", this);

        function innerFuncOne() {
            // Tutaj this wskazuje na element Window, bo funkcja została
            //wywołana bez żadnego kontekstu.
            var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            this.a.style.backgroundColor = randomColor;
        }
        innerFuncOne();
    });

    b.addEventListener("click", function(event) {
        event.stopPropagation();
        // Tutaj this wskazuje na element DOM o id b
        console.log("b: ", this);

        function innerFuncOne() {
            // Tutaj this wskazuje na element Window, bo funkcja została
            //wywołana bez żadnego kontekstu.
            var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            this.b.style.backgroundColor = randomColor;
        }
        innerFuncOne();
    });

});
