console.log('This is Promises');

// let prom1 = new Promise((resolve, reject)=>{
//     setTimeout(()=> {
//         console.log("Yes I am done");
//         resolve("uzma")
        
//     }, 3000);
// })

// prom1.then((a)=>{
//     console.log(a);
// })

//-----------resolve and reject usage--------//

// let prom1 = new Promise((resolve, reject)=>{
//     let a = Math.random();
//     if (a<0.5){
//         reject("no random number was not supporting you")
//     }
//     else{
//     setTimeout(()=> {
//         console.log("Yes I am done");
//         resolve("uzma")
        
//     }, 3000);}
// })

// prom1.then((a)=>{
//     console.log(a);
// }).catch((err)=>{
//     console.log(err)
// })


let prom1 = new Promise((resolve, reject)=>{
    let a = Math.random();
    if (a<0.5){
        reject("no random number was not supporting you")
    }
    else{
    setTimeout(()=> {
        console.log("Yes I am done");
        resolve("uzma")
        
    }, 3000);}
})

let prom2 = new Promise((resolve, reject)=>{
    let a = Math.random();
    if (a<0.5){
        reject("no random number was not supporting you2")
    }
    else{
    setTimeout(()=> {
        console.log("Yes I am done2");
        resolve("uzma2")
        
    }, 1000);}
})

// let p3 = Promise.all([prom1, prom2]);
// p3.then((a)=>{
//   console.log(a);
  
// }).catch((err)=>{
//     console.log(err);
    
// })

let p3 = Promise.allSettled([prom1, prom2]);
p3.then((a)=>{
  console.log(a);
  
}).catch((err)=>{
    console.log(err);
    
})


// let p3 = Promise.race([prom1, prom2]);
// p3.then((a)=>{
//   console.log(a);
  
// }).catch((err)=>{
//     console.log(err);
    
// })