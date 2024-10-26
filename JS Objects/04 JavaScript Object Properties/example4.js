//create an object
const person = {
    firstname: "John",
    lastname: "Doe",
    language: "EN"
};

//change property value
Object.defineProperty(person, "language", {enumerable: false});

//display all properties (ignore enumerable properties)
document.getElementById("demo").innerHTML = Object.getOwnPropertyNames(person);