//create object
const person = {
    firstname: "John",
    lastname: "Doe",
    language: "EN"
};

//display all properties
document.getElementById("demo").innerHTML = Object.getOwnPropertyNames(person);