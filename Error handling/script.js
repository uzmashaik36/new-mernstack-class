let a = prompt("Enter first number")

let b = prompt("Enter second number")

if (isNaN (a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed")
}

let sum = parseInt(a) + parseInt(b)

// let x = 1;

// try {
//     console.log("The Sum is ", sum*x);

// } catch (error) {
//     console.log("Error!!!")
// }

// finally{
//     console.log("files are being closed aand db connectin is closed");
    

// }


function main(){
    let x = 1;

try {
    console.log("The Sum is ", sum*x);
    return true;

} catch (error) {
    console.log("Error!!!")
    return false;
}

finally{
    console.log("files are being closed aand db connectin is closed");
    

}

}


let c = main();