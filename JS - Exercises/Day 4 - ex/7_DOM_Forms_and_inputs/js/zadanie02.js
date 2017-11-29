document.addEventListener('DOMContentLoaded', function() {

    var headerDiv = document.querySelector('.page-header');
    var appleImg = headerDiv.children[1];
    var ubuntuImg = headerDiv.children[2];
    var windowsImg = headerDiv.children[3];
    var select = document.querySelector('select');

    appleImg.style.display = "none"
    windowsImg.style.display = "none"
    ubuntuImg.style.display = "none"

    select.addEventListener('click', function() {
        if (this.value === "Windows") {
            appleImg.style.display = "none"
            ubuntuImg.style.display = "none"
            windowsImg.style.display = "block"
        }
        else if (this.value === "Os X") {
            appleImg.style.display = "block"
            ubuntuImg.style.display = "none"
            windowsImg.style.display = "none"
        }
        else {
            appleImg.style.display = "none"
            ubuntuImg.style.display = "block"
            windowsImg.style.display = "none"
        }

    });
});
