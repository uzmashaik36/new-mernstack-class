console.log("JavaScript Loops");

 let a = 1;

 for (let i = 0; i < 100; i++) {

   console.log(a + i);
}



// Objects
 let obj = {
 name : "uzma",
 role:"developer",
 comapany:"codewithuzma"
 }

 for (const key in obj) {
   
      const element = obj[key];
       console.log(key, element);
      
   
 }
 for (const c of "uzmashaik") {
    console.log(c);
 }



// while loop
 let b = 0;
while (b<6) {
    console.log(b)
   b++;
 }

 let q = 5;
 while (q<6) {
    console.log(q)
   q++;
}

// do while loop 
 let u= 0;
do {
   console.log(u);
   u++;
} while (u<6);