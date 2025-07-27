console.log("Vindhya is Hacker");
console.log("riya is hecker");

setTimeout(() => {
   console.log("I am inside settimeout")
}, 0);
setTimeout(() => {
   console.log("I am inside settimeout2")
}, 2000);

console.log("The End")



const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("vindhya")
  
}
