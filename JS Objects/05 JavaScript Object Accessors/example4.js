//create an object
const person = {
    firstname: "John",
    lastname: "Doe",
    get fullName() {
        return this.firstname + " " + this.lastname;
    }
};

//display data from the object using a getter
document.getElementById("demo").innerHTML = person.fullName;