// let obj = {
//     a:1,
//     b:"Uzma"
// }

// console.log(obj);

// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps : true
// };

// rabbit._proto_ = animal;  //sets rabbit.[[Prototype]] = animal

class Animal{
    constructor(name){
        this.name = name
        console.log("object is created....");
        
    }

    eats(){
        console.log("I am eating")
    }
    jumps(){
        console.log("I am Jumping");
        
    }
}

class Lion extends Animal {
      constructor(name){
        super(name)
        console.log("object is created he is a lion ....");
      }
    //   eats(){
    //     console.log('eating and roaring');
        
    //   }
         eats(){
            super.eats()
        console.log('eating and roaring');
        
      }
}

let a = new Animal("Bunny");
console.log(a);

let l = new Lion("Sher")
console.log(l);

