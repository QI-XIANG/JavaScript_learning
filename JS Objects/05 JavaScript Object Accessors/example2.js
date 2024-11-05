//create an object
const person = {
    firstname: "John",
    lastname: "Doe",
    language: "NO",
    set lang(value){
        this.language = value;
    }
}

//set a property using set
person.lang = "en";

//display data from the object
document.getElementById("demo").innerHTML = person.language;