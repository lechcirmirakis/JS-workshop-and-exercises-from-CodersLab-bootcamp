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
