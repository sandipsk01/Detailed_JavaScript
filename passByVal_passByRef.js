function f(x,b,c){
    x=3;
    b.push("bob");
    c.first=false;
};
var x=4;   //val remains same as only val passes to function
var y=["raj","tom"];   //val changes as reference passes
var z={first:true};

f(x,y,z);
console.log(x,y,z);

