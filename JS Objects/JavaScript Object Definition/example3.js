//constructor function for person objects
function Person(first, last, age, eye) {
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    this.eyeColor = eye;
    //default values
    this.nationality = "English";
}

//create a new object
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");

const mySelf = new Person("Johnny", "Rally", 22, "green");

//display data from object
document.getElementById("demo1").innerHTML = myFather.firstname + " " + myFather.lastname + " is " + myFather.age + " years old.";
document.getElementById("demo2").innerHTML = myMother.firstname + " " + myMother.lastname + " is " + myMother.age + " years old.";
document.getElementById("demo3").innerHTML = mySister.firstname + " " + mySister.lastname + " is " + mySister.age + " years old.";
document.getElementById("demo4").innerHTML = mySelf.firstname + " " + mySelf.lastname + " is " + mySelf.age + " years old.";