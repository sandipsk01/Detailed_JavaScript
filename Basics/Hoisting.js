hoisted();
function hoisted() {
    console.log('Hoisted');
}
// ------------------------------------------------------------
x = 5;
console.log(x);
var x;
//----------------------------------------------------------------
function demo() {
    console.log(x);
    var x = 10;
}
demo();
//--------------------------------------------------------------------