//create an object
const person = {
    firstname: "John",
    lastname: "Doe",
    language: "en",
    get lang() {
        return this.language.toUpperCase();
    }
};

//display data from the object using a getter
document.getElementById("demo").innerHTML = person.lang;