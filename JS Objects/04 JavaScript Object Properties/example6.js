//create an object
const person = {
    firstname: "John",
    lastname: "Doe"
};

//define a getter
Object.defineProperty(person, "fullname", {
    get: function() {
        return this.firstname + " " + this.lastname;
    }
});

//display data
document.getElementById("demo").innerHTML = person.fullname;