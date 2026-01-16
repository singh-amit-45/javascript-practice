// primitive 


// 7 Types of Data Types in JavaScript
 String
 Number
 Boolean
 null
 Undefined
 Symbol
 BigInt

//  Reference(Non Primitive) Data Types

// Array
const heros = ["shaktiman", "naagraj", "doga"];


// Object
let obj ={
    name:"amit",
    age:21,
}

// Function
const myFunction = function(){
    cosnsole.log("hello world");
}


// cosnsole.log(typeof myFunction); 

// Dynamic Typing(value of x can be changed so this is called dynamic typing)
 let x = 10;        
    x = "Hello";
    x = true;
    

    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //   stack (primitive data types) and heap (reference data types /  non primitive)

    let myYouTubeChannel = "codewithamit";
    
    let anotherChannel = myYouTubeChannel; 
    anothername = "codewithdisha";


    console.log (myYouTubeChannel); 
    console.log (anotherChannel);

    let userOne = { 
        email:"user@google.com",
        upi:"user@upi"
    }

    let userTwo = userOne;

    userTwo.email = "amit@google.com"

    console.log(userOne.email);
    console.log(userTwo.email);