var Robot = function(name) {
  this.name = name;
  isFunctional = false; // wywalilem this
}

Robot.prototype.sayHi = function(toWho) {
  if(isFunctional === true){
    console.log("Robot " + this.name + " greets " + toWho);
  }
  else{
    console.log("Robot " + this.name + " is broken");
  }
};

Robot.prototype.fixIt = function() {
  isFunctional = true; // wywalilem this
  console.log("Robot " + this.name + " was fixed");
};

Robot.prototype.changeName = function(newname) {
  console.log("Robot " + this.name + " changes name to " + newname);
  this.name = newname; // dodalem this do name
};



var robocop = new Robot("Robocop"); // tworze nowy obiekt robocop na podstawie konstruktora Robot
console.log(robocop);
console.log(robocop.sayHi("Leszek")); // robot nie jest funkcjonalny
console.log(robocop);
console.log(robocop.fixIt()); // metoda naprawiajaca robota
console.log(robocop);
console.log(robocop.sayHi("Leszek")); // robot wita sie z Leszkiem po naprawie funkcjonalnosci
console.log(robocop);
console.log(robocop.changeName("Batman")); // robot zmienia imie na Batman
console.log(robocop);
console.log(robocop.sayHi("Leszek")); // robot wita sie z Leszkiem po zmianie imienia
