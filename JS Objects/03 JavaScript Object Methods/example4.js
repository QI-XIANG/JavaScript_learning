//create object
const person = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    eyeColor: "blue"
};

let text = Object.values(person);

//display data
document.getElementById("demo").innerHTML = text;