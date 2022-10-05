let x=2; //Global Scope
function myNum(){
    console.log(x);
}

myNum(); //2

function myNum2(){
    let x=4; //local scope
    console.log(x);
}
myNum(); //4

function myNum2(){
    let x=4; //local scope
    if(true){
        console.log(x);
    }
    console.log(x);
}
myNum2(); // 4 4
