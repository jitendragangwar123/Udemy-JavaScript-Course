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
console.log(myArray); 

//New Method to Swap the Array Elements
let myArray=[12,-2,4 ,5 ,6];
[myArray[0],myArray[2]]=[myArray[2],myArray[0]];
console.log(myArray);
