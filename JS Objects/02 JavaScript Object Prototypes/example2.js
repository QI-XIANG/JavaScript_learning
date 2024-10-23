//create object constructor
function Person(first, last, age, eye) {
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    this.eyecolor = eye;
}

//add prototype function
Person.prototype.name = function() {
    return this.firstname + " " + this.lastname;
}

//create new object
const myFather = new Person("John", "Doe", 50, "blue");

//display data from object
document.getElementById("demo").innerHTML = "My father is " + myFather.name() + "."