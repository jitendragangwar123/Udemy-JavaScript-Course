//Destructuring with arrays
const arr1=[1,2,3,4];
const arr2=[5,6,7];
//using spread operator
const arr3=[...arr1,...arr2];
console.log(arr3); //[ 1, 2, 3, 4, 5, 6, 7 ]

//Destructuring with objects
const obj1={
    name:"jeetu",
    age:24
}
const obj2={
    name:"amit"
}
const obj3={
    ...obj1,...obj2
}
console.log(obj3) // { name: 'amit', age: 24 }
