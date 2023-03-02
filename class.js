class Vehicle{
    constructor(nw,price){
    this.nw=nw;
    this.price=price;
}

getPrice(){
    return this.price;
}
}

var vehicle1=new Vehicle(2,300);

vehicle1;

//class is one type of function.
//can not call without 'new' keyword.
//does not support hoisting.
//if we do not use constructor, empty constructor will automatically generates.



// Inheritance
class Car extends Vehicle{
    constructor(nd){
        super(4,300);
        this.nd=nd;
    }
}

var c=new Car(4);
