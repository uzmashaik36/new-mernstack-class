console.log("Javascript strings");

let a = "uzma";
console.log(a);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);  //undefined

console.log(a.length);

let real_name = "uzma"
let friend = "riya"

console.log("her name is " + real_name +" and her friend is " + friend );
console.log(`her name is ${real_name} and her friend is ${friend}`);

let b = "vindhya"
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.length);

console.log(b.slice(1, 4));
console.log(b.slice(1));
console.log(b.replace("vi", "66"));
console.log(b.concat( a, " shubham"))