//create object
const person = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    eyeColor: "blue"
};

//for loop
let text = "";
for (let x in person) {
    text += person[x] + " ";
}

//display data
document.getElementById("demo").innerHTML = text;