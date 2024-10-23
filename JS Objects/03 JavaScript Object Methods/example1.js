//create target object
const person1 = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    eyeColor: "blue"
}

//create source object
const person2 = {firstname: "Anne", lastname: "Smith"};

//assign source to target
Object.assign(person1, person2);

//display data from object
let text = Object.entries(person1);
document.getElementById("demo").innerHTML = text