console.log("--------------------> Z a d a n i e 2  <---------------");

    function maxNumber() {
        var max = 1;
        for (var i = 0; i < arguments.length; i++) {
            if (max < arguments[i]) {
                max = arguments[i];
            }
        }
        return max;
    }

    console.log(maxNumber(3,45, 23, 56, 1123, 76, 45, 3));

console.log("--------------------> Z a d a n i e 3  <---------------");

    function countHello(number) {
        var counter = 0;
        var licznik = setInterval(function()	{
                counter += 1
        		console.log('Hello '+(counter));
                if (counter == number) {
                    clearInterval(licznik);
                }
        },	1000);
    }
    countHello(4);

console.log("--------------------> Z a d a n i e 4  <---------------");

    hello(); // funkcja działa prawidłowo czy wywołamy ją przed zdefiniowaniem czy
             // po zdefiniowaniu, działa hoisting
    function hello() {
        console.log("Hello");
    }

    witaj(); // funkcja działa tylko w momencie gdy wywołamy ją po zdefiniowanu jako
             // wyrażenie funkcyjne czyli przypisanie funkcji do zmiennej
    var witaj = function() {
        console.log("Witaj!");
    }
