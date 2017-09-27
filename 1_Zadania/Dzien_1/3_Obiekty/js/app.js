console.log("--------------------> Z a d a n i e 1 z wykl <---------------");

// String.prototype.upperLower = function () {
//
//
// };

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
