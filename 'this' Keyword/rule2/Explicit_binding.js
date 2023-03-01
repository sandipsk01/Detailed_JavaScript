const john={
    name:'John'
}

function ask(){
    console.log(this);
}

ask();
//window{...}

ask.call(john);
//OR
ask.apply(john);

//output
//{name:"John"}