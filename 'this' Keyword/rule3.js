// Implicit Binding
var raj={
    name:'Raj',
    greet:function(){
        console.log(this);
    }
}

raj.greet();   //implict binding
//{name:'Raj', greet:f}