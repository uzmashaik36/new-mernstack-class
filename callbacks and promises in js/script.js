console.log("Dev is hacker");
console.log("shanker is hecker");


setTimeout(() => {
    console.log("I am inside the setTimeout1")
}, 2000);
setTimeout(() => {
    console.log("I am inside the setTimeout2")
}, 2000);

console.log("The end");


 const fn = ( )=> {
   console.log("Nothing")
 }

const callback = (arg, fn) => {
    console.log(arg)
    fn()
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = () => callback("Uzma" ,fn);
    document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)