document.addEventListener("DOMContentLoaded", function() {

console.log("--------------------> Z a d a n i e 1 z wykl  <---------------");

    var links = document.querySelectorAll('li');
    console.log(links);

    function getDatasInfo(elements) {
        var linksData = [];
        for (var i = 0; i < elements.length; i++) {
            linksData.push(elements[i].dataset.color);
        }
        return linksData
    };
    console.log(getDatasInfo(links));

});
