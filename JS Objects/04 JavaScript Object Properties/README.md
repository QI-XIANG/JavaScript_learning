## Property Management Methods

// Adding or changing an object property
`Object.defineProperty(object, property, descriptor)`

// Adding or changing object properties
`Object.defineProperties(object, descriptors)`

// Accessing a Property
`Object.getOwnPropertyDescriptor(object, property)`

// Accessing Properties
`Object.getOwnPropertyDescriptors(object)`

// Returns all properties as an array
`Object.getOwnPropertyNames(object)`

// Accessing the prototype
`Object.getPrototypeOf(object)`

---

## Property Attributes

All properties have a name. In addition they also have a value.

The value is one of the property's attributes.

Other attributes are: enumerable, configurable, and writable.

These attributes define how the property can be accessed (is it readable?, is it writable?)

In JavaScript, all attributes can be read, but only the value attribute can be changed (and only if the property is writable).

( ECMAScript 5 has methods for both getting and setting all property attributes)

### Changing Meta Data

The following property meta data can be changed:

`writable : true`      // Property value can be changed
`enumerable : true`    // Property can be enumerated
`configurable : true`  // Property can be reconfigured

`writable : false`     // Property value can not be changed
`enumerable : false`  // Property can be not enumerated
`configurable : false` // Property can be not reconfigured

// Defining a getter
`get: function() { return language }`
// Defining a setter
`set: function(value) { language = value }`


### Note

The `getOwnPropertyNames()` method returns all properties.

The `Object.keys()` method returns all enumerable properties.

If you define object properties without enumerable:false, the two methods will return the same.