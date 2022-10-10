//Recursive function
function countDown(num){
    console.log(num);
    const newNum=num-1;
    if(newNum>0){
        countDown(newNum);
    }
}
countDown(5); 

/*
5
4
3
2
1
*/
