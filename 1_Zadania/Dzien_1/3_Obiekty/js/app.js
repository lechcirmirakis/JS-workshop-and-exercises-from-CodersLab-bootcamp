console.log("--------------------> Z a d a n i e 1 z wykl <---------------");

// String.prototype.upperLower = function() {
//     var newString = "";
//     for (var i = 0; i < this.length; i++) {
//         c = this[i]
//         if (c.indexof == 0) {
//             newString = c.toUpperCase();
//         }
//         else {
//             newString = c.toLowerCase();
//         }
//     }
//     return newString
// };

// var str = new String("LEGIA WARSZAWA");
// console.log(str);
// console.log(str.upperLower());


console.log();

console.log("--------------------> Z a d a n i e 1 <---------------");

    var book = {
        title: "Godfather",
        author: "Mario Puzu",
        numberOfPages: 500,
    }

console.log(book.title);
console.log(book.author);
console.log(book.numberOfPages);

console.log("--------------------> Z a d a n i e 2 <---------------");

    var person = {
        name: "John",
        age: 34,
        sayHello: function() {
            console.log("hello my name is "+this.name);
        }
    }

    console.log(person.name);
    console.log(person.age);
    person.sayHello();

console.log("--------------------> Z a d a n i e 3 <---------------");

    var train = {
        type: "osobowy"
    }

    console.log(train instanceof Object);

    // wyswietlilo true

console.log("--------------------> Z a d a n i e 4 <---------------");

    // konstruktor Car
    function Car(CarBrand, CarColor, CarNumberOfKilometers) {
        this.brand = CarBrand;
        this.color = CarColor;
        this.NumberOfKilometers = CarNumberOfKilometers;
        this.printCarinfo = function() {
            console.log(this.brand+" "+this.color+" "+this.NumberOfKilometers+" km");
        }
        this.drive = function(km) {
            this.NumberOfKilometers+=km
        }
    }
    // Nowy obiekt na bazie konstruktora Car
    var mercedes = new Car("Mercedes", "czarny", 0);
    console.log(mercedes.printCarinfo());
    mercedes.drive(20);
    console.log(mercedes.printCarinfo());
    // Nowy obiekt na bazie konstruktora Car
    var bmw = new Car("Bmw", "czerwone", 220);
    console.log(bmw.printCarinfo());
    bmw.drive(20);
    console.log(bmw.printCarinfo());

console.log("--------------------> Z a d a n i e 5 <---------------");

    // dodaje tablice przegladami do obiektu bmw
    bmw.przeglad = ["17.10.2014", "18.10.2015", "19.10.2016"];
    console.log(bmw.przeglad);

    // metoda-funkcja dodajaca date do tablicy z przegladami
    bmw.addData = function (date) {
        this.przeglad.push(date);
    }
    bmw.addData("20.10.2017");
    console.log(bmw.przeglad[1]);

    bmw.showData = function() {
        console.log("Wszystkie daty przegladów Twojego BMW: "+bmw.przeglad);
    }
    bmw.showData();

console.log("--------------------> Z a d a n i e 6 <---------------");

    var bird = {
        type: "wrobelek",
        name: "Ćwirek",
        getType: function() {
            console.log("to jest ptak o imieniu "+this.name+", ptak ten to "+this.type);
        }
    }
    bird.getType();
    console.log(bird instanceof Object);

    // obiekt bird jest instancja obiektu Object

console.log("--------------------> Z a d a n i e 7 <---------------");

    var myString = "You`ll Never Walk Alone";
    console.log(myString instanceof Object); // false
    console.log(myString instanceof String); // false
    var myString = new String("You`ll Never Walk Alone");
    console.log(myString instanceof Object); // true
    console.log(myString instanceof String); // true

    var myNumber = 349;
    console.log(myNumber instanceof Object); // false
    console.log(myNumber instanceof String); // false
    console.log(myNumber instanceof Number); // false
    var myNumber = new Number(349);
    console.log(myNumber instanceof Object); // true
    console.log(myNumber instanceof String); // false
    console.log(myNumber instanceof Number); // true

    /* typy podstawowe nie sa obiektami wiec nie sa tez instancjami Object,
    String itp. dopiero po stworzeniu z nich obiektow, staja sie instancjami np
    Object, String, Number */

    console.log("--------------------> Z a d a n i e 8 <---------------");

    // wyoknane w pliku js/zadanie03.js

    console.log("--------------------> Z a d a n i e 9 <---------------");

    var Rectangle = function(a, b) {
        this.width = a;
        this.height = b;
        this.getArea = function () {
            console.log("Pole powierzchni prostokąta to: "+this.width*this.height+" cm2");
        };
        this.getPerimiter = function () {
            console.log("Obwód prostokąta to: "+(this.width*2+this.height*2)+" cm");
        };
    }
    var recta = Object.create(Rectangle);

    console.log(recta.hasOwnProperty("getArea"));
        // wyswietla false gdyż metoda getArea jest stworzona tylko dla prototypu,
        // Object.create jej nie powiela

        // Twrze wiec kolejny obiekt za pomocą "zwyklej metody"
    var recta2 = new Rectangle(5,3);
    console.log(recta2.hasOwnProperty("getArea"));
        // dopiero teraz pokazuje true i moge uzyc tych metod

    console.log(recta2.getArea());
    console.log(recta2.getPerimiter());

console.log("--------------------> Z a d a n i e 10 <---------------");

    var Calculator = function() {
        this.history = [ ];
    }

    Calculator.prototype.add = function (num1, num2) {
        var result = num1+num2;
        console.log("wynik dodawania: "+result);
        this.history.push("added "+ num1+ " to "+ num2+ " got "+ result);
    };

    Calculator.prototype.multiply = function (num1, num2) {
        var result = num1*num2;
        console.log("wynik monożenia: "+result);
        this.history.push("multiplied "+ num1+ " wiht "+ num2+ " got "+ result);
    };

    Calculator.prototype.subtract = function (num1, num2) {
        var result = num1-num2;
        console.log("wynik odejmowania: "+result);
        this.history.push("subtracted "+ num1+ " from "+ num2+ " got "+ result);
    };

    Calculator.prototype.divide = function (num1, num2) {
        var result = num1/num2;
        console.log("wynik dzielenia: "+result);
        this.history.push("divided "+ num1+ " by "+ num2+ " got "+ result);
    };

    Calculator.prototype.printOperations = function() {
        var hist = this.history;
        for (var i = 0; i < hist.length; i++) {
            console.log(hist[i]);
        }
    };

    Calculator.prototype.clearOperations = function() {
        this.history.length = 0
    };

    var calc = new Calculator();
    console.log(calc.add(2,3));
    console.log(calc.multiply(2,2));
    console.log(calc.subtract(10,5));
    console.log(calc.divide(100,2));
    console.log(calc.history);
    console.log(calc.printOperations());
    console.log(calc.clearOperations());
    console.log(calc.history);
