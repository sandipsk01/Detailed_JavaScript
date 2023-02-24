var subtract = function(a, b) {
    return a-b;
}

var op = function (func) {
    var x = 2;
    var y = 3;
    return func(x, y);
}

console.log(op(add));

/* 
A function passed to another function as an argument is referred to as a callback function. 
If you want to execute a function right after the return of some other function, then callbacks can be used.
*/