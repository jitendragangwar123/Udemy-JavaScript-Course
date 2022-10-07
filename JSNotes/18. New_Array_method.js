const a=[1,2,3,4,5];
const eqArray=[]
for(let i=0;i<a.length;i++){
    const el=a[i];
    eqArray.push(el);
}
console.log(eqArray);
// best approach to use mapp function inplace of for loop
//Map array does not change the original array
const arr=[1,2,3,4,5];
const newMappedArray=arr.map(function(element){
    //console.log(element);
    return 100;
    });

console.log(arr,newMappedArray); 
//[ 1, 2, 3, 4, 5 ] [ 100, 100, 100, 100, 100 ]

const arr1=[1,2,3,4,5];
const newMappedArray1=arr1.map(function(element){
    //console.log(element);
    return element**2;
    });

console.log(arr1,newMappedArray1); 
//[ 1, 2, 3, 4, 5 ] [ 1, 4, 9, 16, 25 ]

const arr2=[1,2,3,4,5];
const newMappedArray2=arr2.map(function(element){
    //console.log(element);
    return 'Hii';
    });

console.log(arr2,newMappedArray2); 
//[ 1, 2, 3, 4, 5 ] [ 'Hii', 'Hii', 'Hii', 'Hii', 'Hii' ]


//arrow function
const arr3=[1,2,3,4,5];
const newMappedArray3=arr3.map(element =>element**2);
    //console.log(element);
console.log(arr3,newMappedArray3); 
//[ 1, 2, 3, 4, 5 ] [ 1, 4, 9, 16, 25 ]


//filter array return the boolean value and it does not change the original array value.

const arr4=[1,2,3,4,5];
const newMappedArray4=arr4.map(element =>element**2);
    //console.log(element);
const filterArray=arr4.filter(element => true);
console.log(arr4,newMappedArray4,filterArray); 
//[ 1, 2, 3, 4, 5 ] [ 1, 4, 9, 16, 25 ] [ 1, 2, 3, 4, 5 ]

const arr5=[1,2,3,4,5,6];
const newMappedArray5=arr5.map(element =>element**2);
    //console.log(element);
const filterArray1=arr5.filter(element => element<3);
console.log(arr5,newMappedArray5,filterArray1); 
//[ 1, 2, 3, 4, 5 ] [ 1, 4, 9, 16, 25 ] [ 1, 2 ]


const friends=[
    {
        name:'x',
        age:22
    },
    {
        name:'y',
        age:24
    },
    {
        name:'z',
        age:26
    }
]

const filteredArray=friends.filter(friend=>friend.age > 24);
console.log(filteredArray); //[ { name: 'z', age: 26 } ]

//find method
const findX=friends.find(friend=>friend.age===24);
console.log(findX); //{ name: 'y', age: 24 }
//forEach method
friends.forEach(friend=>{
    console.log(friend);
}
)
//{ name: 'x', age: 22 }
//{ name: 'y', age: 24 }
//{ name: 'z', age: 26 }







