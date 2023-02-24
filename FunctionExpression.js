var varName1= function functionName1(){
    return "Func1 Worked";
};

console.log(varName1());   // Call it by variable name . Function name name won't work.

var varName2= function(){
    return "Func2 Worked";
};

console.log(varName2());

// Doesn't support hoisting.( cannot use before creating)