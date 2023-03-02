function Vehicle(nw,price){
    this.nw=nw;
    this.price=price;
}

//Prototype
Vehicle.prototype.getPrice=function(){
    return this.price;
}

var vehicle1=new Vehicle(2,300);

vehicle1;
//will not create getPrice object and saves memory.

vehicle1.__proto__;
//will give prototype

// vehicle1.__proto__===Vehicle.prototype===Object.getPrototypeOf(vehicle1);
//true

//To check whethee it prototype of xyx object or not
Vehicle.prototype.isPrototypeOf(vehicle1);

// To check whether object has its own property
vehicle1.hasOwnProperty('price'); //true
vehicle1.hasOwnProperty('gePrice');   //false

//How any property gets checked or gets value
//vehicle1>Vehicle.protype>Object.prototype

//Object=> All objects in js inherits 'Object'. And 'Object' is constructor function.
//object=> It is a datatype {}



