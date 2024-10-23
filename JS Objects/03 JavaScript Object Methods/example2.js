//create object
const fruits = {
    Bannanas : 300,
    Apples : 500,
    Oranges : 200
}

//loop
let text = "";
for (let [fruit, amount] of Object.entries(fruits)) {
    text += fruit + " : " + amount + "<br>";
}

//display data
document.getElementById("demo").innerHTML = text

//map
const myMap = new Map(Object.entries(fruits));
document.getElementById("demo2").innerHTML = myMap