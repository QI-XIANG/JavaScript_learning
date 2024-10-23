//create an object
const person = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    eyeColor: "blue"
};

//get the keys
const keys = Object.keys(person);

//display data
document.getElementById("demo").innerHTML = keys;