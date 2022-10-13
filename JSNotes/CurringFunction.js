//Normal function
const add=(a,b,c)=>{
    return a+b+c;
}
console.log(add(1,2,3)); // 6

//Curring Function
const curring_add=(a)=>{
    return (b)=>{
        return (c)=>{
            return a+b+c;
        }
    }
}
console.log(curring_add(1)(2)(7));// 10
