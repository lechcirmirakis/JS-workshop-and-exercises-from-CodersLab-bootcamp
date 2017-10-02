document.addEventListener('DOMContentLoaded', function() {

    //  nie skończone

    function changeSide() {
        var list01 = document.querySelector('#list1');
        var list02 = document.querySelector('#list2');
        var elementsOfList01 = list01.querySelectorAll('li');
        var elementsOfList02 = list02.querySelectorAll('li');
        for (var i = 0; i < elementsOfList01.length; i++) {
            elementsOfList01[i].querySelector('a').addEventListener('click', function() {
                var toClone = this.parentElement;
                var newLi = toClone.cloneNode(true);
                list02.appendChild(newLi);
                toClone.parentElement.removeChild(toClone);

            });

        }
        for (var i = 0; i < elementsOfList02.length; i++) {
            elementsOfList02[i].querySelector('a').addEventListener('click', function() {
                var toClone = this.parentElement;
                var newLi = toClone.cloneNode(true);
                list01.appendChild(newLi);
                toClone.parentElement.removeChild(toClone);

            });

        }
    }

    changeSide();

});
