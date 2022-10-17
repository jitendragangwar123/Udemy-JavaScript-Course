//if-else example
var x=Number(prompt("Enter x :"));
if(x<0){
    alert("x is less than zero");
}
else if(x===0){
    alert("x is equal to zero");
}
else{
    alert("x is greater than zero")
}

// Second Example
function testSize(num) {
    // Only change code below this line
      if(num < 5){
          return "Tiny";
      }
      else if(num < 10){
          return "Small";
      }
      else if(num < 15){
          return "Medium";
      }
      else if(num < 20){
          return "Large";
      }
      else if(num >= 20){
          return "Huge";
      }
      else{
          return "Change Me";
      }
  }
  
 console.log(testSize(7)); // Small

// First Example
// function getPrice(item){
//     if(item==='Book'){
//         return 200;
//     }
//     else if(item==='Copy'){
//         return 300;
//     }
//     else if(item==='Laptop'){
//         return 30000;
//     }
//     else if(item==='Pen'){
//         return 10;
//     }
// }
//  console.log(getPrice("Pen"));

//Best approuch =>

const studyMaterials={
    Book:200,
    Copy:300,
    Laptop:30000,
    Pen:10
};

function getPrice(item){
    return studyMaterials[item];
}

console.log(getPrice("Laptop"));


// Third Example

let isDeveloper=false;
// if(isDeveloper){
//     console.log("You are a Developer.");
// }
// else{
//     console.log("You are not a Developer.");
// }

// Best Approuch
console.log(`You are ${isDeveloper ? " " : "not"} a Developer`);

// If_Else Loop
const canAccess=(a)=>{
    if(a===1 || a===2 || a===3){
        return true;
    }
    return false;
};
console.log(canAccess(4)); // false


//Better Approach to store the values in the array
const canAccess=(a)=>{
   const arr=[1,2,3];
   return arr.includes(a);
}
console.log(canAccess(3)); //true


