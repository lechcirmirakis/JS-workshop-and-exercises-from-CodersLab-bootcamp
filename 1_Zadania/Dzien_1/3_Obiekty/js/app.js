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

    var mercedes = new Car("Mercedes", "czarny", 0);
    console.log(mercedes.printCarinfo());
    mercedes.drive(20);
    console.log(mercedes.printCarinfo());

    var bmw = new Car("Bmw", "czerwone", 220);
    console.log(bmw.printCarinfo());
    bmw.drive(20);
    console.log(bmw.printCarinfo());
