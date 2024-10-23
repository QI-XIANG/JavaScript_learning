//create dataset
const fruits = [
    ["apples", 300],
    ["pears", 900],
    ["bananas", 500]
];

const myObject = Object.fromEntries(fruits);

//display data
document.getElementById("demo").innerHTML = myObject.pears;