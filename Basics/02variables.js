
// var, let, const
var myName = 'Sandip';
var channel;
var marks = 3454;
marks = 0;
channel = 'CodeWithHarry'
console.log(myName, channel, marks);
// Rules for creating JavaScript Variables
/*
1. Cannot start with numbers
2. Can start with letter, numbers, _ or $
3. Are case sensitive
*/
var city = 'Delhi';     // var ha global scope
console.log(city);

const ownersName = 'Hari Ram';   //const cannot be changed
// ownersName = 'Harry'; // Cannot do this (error)
console.log(ownersName);
const fruit = 'Orange';

{
 let city = 'Rampur';   
 city = 'Kolkata';    //let has block level scope
 console.log(city);
}
console.log(city);


const arr1 = [12,23,12,53, 3];
// arr1 = [15,121, 3434,2] we can not do this
// arr1.push(45);  we can perform operations on const array and object
console.log(arr1)

/* Most common programming case types:

1. camelCase  
2. kebab-case
3. snake_case 
4. PascalCase 


*/
