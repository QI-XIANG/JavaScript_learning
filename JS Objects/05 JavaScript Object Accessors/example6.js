//create an object
const person = {
    firstname: "John",
    lastname: "Doe",
    language: "",
    set lang(value){
        this.language = value.toUpperCase();
    }
};

//set a property using set
person.lang = "en";

//display data from the object
document.getElementById("demo").innerHTML = person.language;