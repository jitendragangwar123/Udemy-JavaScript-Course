//Objects
const myObject={
    "keyname1":"value1",
    "keyname2":"value2"
}
console.log(myObject["keyname1"]); // value1

//nested key
const myObjects={
    "keyname1":{
        "keyname2.1":"value1"
    },
    "keyname2":"value2"
}
console.log(myObjects["keyname1"]["keyname2.1"]); //value1


//By using dot operator
const myObjects={
    keyname1:{
        "keyname2.1":"value1"
    },
    keyname2:"value2"
}
console.log(myObjects.keyname1["keyname2.1"]); //value1

//Nested Object
const myObjects={
    keyname1:{
        "keyname2.1":"value1",
         obj2:{
        "key":"v1"
        }
    },
    keyname2:"value2"
}
console.log(myObjects.keyname1.obj2["key"]); //v1

//other example
const myOwnObject={
    "myAge":24,
    "myName":"Jeetu",
    myFriend:{
        "myFriendAge": 26
    }
}

console.log(myOwnObject.myFriend["myFriendAge"]); //26

