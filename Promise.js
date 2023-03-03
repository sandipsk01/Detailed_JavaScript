var promise=new Promise((resolve,reject)=>{});
console.log(promise);
//Promise{<pending>}

var promise=new Promise((resolve,reject)=>{
    resolve("Yay, Successfully resolved");
});
console.log(promise);
//Promise{<fullfilled>:"Yay, Successfully resolved"}

var promise=new Promise((resolve,reject)=>{
    reject("Errored occured");
});
console.log(promise);
//Promise{<rejected>:"Error occured"}
//Error 

//To fetch data
// .then when fullfilled
// .catch when rejected

var promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({message:"Yay, Successfully resolved"})
    },3000);
});

promise
    .then((data)=>{
        console.log(data);
    })
    .catch((error)=>{
        console.log(error)
    });