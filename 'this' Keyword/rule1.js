// 'new' keyword rule
function vehicle(){
    console.log(this);
}
new vehicle();


//output
// vehicle{}
// vehicle{}