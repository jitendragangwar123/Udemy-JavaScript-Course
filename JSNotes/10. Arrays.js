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
