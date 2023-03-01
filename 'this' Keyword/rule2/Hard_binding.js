var raj={
    name:'Raj',
    greet:function(){
        console.log(this);
    }
}

raj.greet();
// {name:'Raj', greet:f}

var localAsk=raj.greet;
localAsk();
//window{...}

// Hard Binding
var locatGreet=raj.greet.bind(raj);   // raj is place at the place of 'thisArg'
locatGreet();
//{name:'Raj', greet:f}