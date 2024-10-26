//create an object
const person = {
    firstname: "John",
    lastname: "Doe",
    language: "EN"
};

//change the language property
Object.defineProperty(person, "language", {enumerable: false});

//display all enumerable properties
document.getElementById("demo").innerHTML = Object.keys(person);