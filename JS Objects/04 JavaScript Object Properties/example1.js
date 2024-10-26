//create an object
const person = {
    firstname: "John",
    lastname: "Doe",
    language: "EN"
};

//add property
Object.defineProperty(person, "year", {value: 2008});

//display data from object
document.getElementById("demo").innerHTML = person.year;