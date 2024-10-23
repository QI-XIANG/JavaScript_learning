//create object constructor
function Person(first, last, age, eye) {
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    this.eyecolor = eye;
}

//add prototype attribute
Person.prototype.nationality = "English";

//create new object
const myFather = new Person("John", "Doe", 50, "blue");

//display data from object
document.getElementById("demo").innerHTML = "The nationality of " + myFather.firstname + " " + myFather.lastname + " is " + myFather.nationality + "."