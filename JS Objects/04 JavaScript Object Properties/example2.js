//create an object
const person = {
    firstname: "John",
    lastname: "Doe",
    language: "EN"
};

//change property value
Object.defineProperty(person, "language", {value: "NO"});

//display data from object
document.getElementById("demo").innerHTML = person.language