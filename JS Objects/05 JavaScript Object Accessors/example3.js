//create an object
const person = {
    firstname: "John",
    lastname: "Doe",
    fullname: function(){
        return this.firstname + " " + this.lastname;
    }
};

//display data from the object using a method
document.getElementById("demo").innerHTML = person.fullname();