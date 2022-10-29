
const mygreet = function(name, thank='Thank You'){
    let msg = `Happy Birthday ${name} How I wish I could fly to you right now and be with you on this special day of yours. But remember, my good wishes are always there with you. ${thank}!`;
    return msg;

}


let name = 'SkillF';
let name2 ='Rohan';

let val = mygreet(name, 'Thanks a lot');
console.log(val);


const myobj = {
    name: "SkillF",
    game: function(){
        return "GTA";
    }
}
console.log(myobj.game())

arr = ['fruit', 'vegetable', 'furniture'];

arr.forEach(function(element, index, array) {
    console.log(element, index)
});         



// Arrow function
const greet = name =>  "Good Morning " + name;
console.log(greet('Harry'))