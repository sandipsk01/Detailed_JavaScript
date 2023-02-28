var i=10;
function outer(){
    var j=20;
    console.log(i,j);
    var inner=function(){
        console.log(j);
    }
    return inner;
}

var inner=outer();
inner();