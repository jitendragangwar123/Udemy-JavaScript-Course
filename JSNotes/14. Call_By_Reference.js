const myProfile={
    name:"Jitendra",
    age:24
}

const mySecondProfile={
    name:"Jeetu",
    age:25
}

function primitiveMutate(primitive){
    primitive++;
    console.log(primitive);
}

function mutate(obj){
    obj.age++;
}

let num=100;
primitiveMutate(num); //101
console.log(num); //100

mutate(mySecondProfile);
console.log(mySecondProfile);
