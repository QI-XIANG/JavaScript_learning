//create an empty object
const person = new Object();

//add properties
person.firstname = "John";
person.lastname = "Doe";
person.age = 50;
person.eyeColor = "blue";

//display data from object
document.getElementById("demo").innerHTML = person.firstname + " " + person.lastname + " is " + person.age + " years old.";