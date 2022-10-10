//Arrays
let myFriends=[];
function addMyFriends(friend){
    myFriends.push(friend);
    console.log(myFriends);
    }
addMyFriends("Hari");
addMyFriends("Ram");//[ 'Hari', 'Ram' ]

//push add the value in the last
//unshift add the value on top 
let myFriends=[];
function addMyFriends(friend){
    myFriends.unshift(friend);
    console.log(myFriends);
    }
addMyFriends("Hari");
addMyFriends("Ram"); //[ 'Ram', 'Hari' ]

//Remove the elements
let removeFriends=myFriends.pop();
console.log(myFriends); //[ 'Ram' ]

//Update the elements
myFriends[0]="Hari";
console.log(myFriends); //[ 'Hari' ]

//for loop 
for(let i=0;i<10;i++){
    myFriends.push(i);
}
console.log(myFriends);


//Swap the Array Elements 
let myArray=[12,-2,4 ,5 ,6];
let temp=myArray[0];
myArray[0]=myArray[1];
myArray[1]=temp;
console.log(myArray); // [ 4, -2, 12, 5, 6 ]

//New Method to Swap the Array Elements
let myArray=[12,-2,4 ,5 ,6];
[myArray[0],myArray[2]]=[myArray[2],myArray[0]];
console.log(myArray); // [ 4, -2, 12, 5, 6 ]

// String Array
let stringArray=["j","k","l","u","i"];
// sort the array
stringArray.sort();
// Get the ascending order of the array elements
console.log(stringArray); //[ 'i', 'j', 'k', 'l', 'u' ]
// Reverse of the array
stringArray.reverse();
// Get the descending order of the array elements
console.log(stringArray); // [ 'u', 'l', 'k', 'j', 'i' ]

//Number Array
let numArr=[1,2,4,2,5];
//Sort the Array Elements in ascending order
numArr.sort((a,b)=>a-b);
console.log(numArr);

//Sort the Array Elements in descending order
numArr.sort((a,b)=>b-a);
console.log(`descending order:${numArr}`);

