//define an object
const obj = { counter: 0 };

//define getters and setters
//getters
Object.defineProperty(obj, "reset", {
    get: function() { this.counter = 0; }
});

Object.defineProperty(obj, "increment", {
    get: function() { this.counter++; }
});

Object.defineProperty(obj, "decrement", {
    get: function(){ this.counter--; }
});

//setters
Object.defineProperty(obj, "add", {
    set: function(value) { this.counter += value; }
});

Object.defineProperty(obj, "subtract", {
    set: function(value){ this.counter -= value; }
});

//work with the counter
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;

//display data
document.getElementById("demo").innerHTML = obj.counter;
