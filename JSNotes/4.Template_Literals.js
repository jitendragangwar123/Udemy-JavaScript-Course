//using `` for the string (ES6 version)
const a_string = `something`;
console.log(a_string);

//old method
const str='My Name is Jeetu.\
\
I am 30 years old.';
console.log(str); //My Name is Jeetu.I am 30 years old.

//new method 
const str1=`My Name is Jeetu.
I am 30 years old.`
console.log(str1);
//My Name is Jeetu.
//I am 30 years old.


//Old concept
const myFriends={
    Name:"Jeetu",
    Age:22
}

const str1='My name is '+myFriends.Name+' and I am '+myFriends.Age+' years old.'
console.log(str1); 
//My name is Jeetu and I am 22 years old.

//New Concept
const myFriends1={
    Name:"Jeetu",
    Age:23
}

const str2=`My name is ${myFriends1.Name} and I am ${myFriends1.Age} years old.`
console.log(str2); 

