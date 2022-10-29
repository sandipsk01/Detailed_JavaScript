// Primitive data types

// String
let myName = "Sandip";
console.log("My string is " + myName);
console.log("Data type is " + (typeof myName));

// Numbers
let marks = 34.4;
console.log("Data type is " + (typeof marks));

// Boolean
let isDriver = true;
console.log("Data type is " + (typeof isDriver));

// Null
let nullVar = null;
console.log("Data type is " + (typeof nullVar));

// Undefined
let undef = undefined;
console.log("Data type is " + (typeof undef));

// Reference Data Types

// Arrays
let myarr = [1, 2, 3, 4, false, "string"];
console.log("Data type is " + (typeof myarr));

// Object Literals
let stMarks = {
    harry: 89,
    Shubham: 36,
    Rohan: 34
}
console.log( typeof stMarks);

// Function
function findName() {
    
}
console.log( typeof findName);

// Date
let date = new Date();
console.log( typeof date);

// Comms

/*
JavaScript provides six primitive types like Boolean, number, string, undefined, null, symbol, and a reference type as object literals, array, functions, and dates.


What is the difference between primitive and reference datatype?

JavaScript stores the primitive value on the stack because the size of a primitive value is fixed. On the other hand, JavaScript stores the reference value on the heap because the size of the reference value is dynamic.
One of the most significant differences between primitive data and reference data is that, If the value is primitive, then we manipulate the actual valuestored in that variable. Whereas, If the value is of reference data type, we can manipulate that object's reference, rather than the actual object. It means a variable that stores an object is accessed by reference.
*/
