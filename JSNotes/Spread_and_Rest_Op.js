//Create new Array by using spread operator
const arr1=[1,2,3];
const arr2=[...arr1,4,5,6];
console.log(arr2);

//Create the copy of an Array by using spread operator
const arr1=[1,2,3];
const arr2=[...arr1];
console.log(arr2);

//Create the copy of an Object by using spread operator
const car={
    Model:'Fiesta',
    Name:'Ford' 
}
const copyCar={...car}
console.log(copyCar);

//Using strings, the spread operator creates an array with each char in the string
const str="Jay";
const arrayized=[...str];
console.log(arrayized);

//Use an array as function argument by using spread operator
const fun=(p1,p2)=>{
    return {p1,p2};
}
const param=[1,3];
console.log(fun(...param));

//Sum of all passed Numbers
const sum = (a, b, c, d, e) => {
    const res=a + b + c + d + e;
    return res;
}
const numbers = [1, 2, 3, 4, 5];
const sumOfNumbers = sum(...numbers);
console.log(sumOfNumbers);

//ES2018 introduces rest properties, which are the same but for objects
const { first, second, ...others } = {
  first: 1,
  second: 2,
  third: 3,
  fourth: 4,
  fifth: 5
}
console.log(others);
console.log(first);

//Spread properties allow to create a new object by combining the properties of the object passed after the spread operator
const items = { first, second, ...others }
console.log(items);
