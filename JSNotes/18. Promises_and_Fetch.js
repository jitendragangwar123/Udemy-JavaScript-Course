//promise is an Object and fetch an API which returns the data in future
const promiseObject=fetch('/data.json');
promiseObject.then(response=>{
    const promiseObject1=response.json()
    promiseObject1.then(data=>{
        console.log(data);
    })
})


//data.json
{
    name:"jay",
    age:22
}
