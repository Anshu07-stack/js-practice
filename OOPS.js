// JavaScript and classes

// OOP

// object
// -collection of properties and methods 
// for example toLowerCase

// ---------------

// parts of OOP 
// Object literal
// -constructor function
// prototypes
// classes
// -instanceof (new , this)

// 4 pillers
//  Abstraction
//  Encapsulation
// Inheritence
// Polymorphism



// object literals

const userr = {
    username:"Anshu",
    age:22,
    signedIn:true,
    getUserDetails:function (){
        console.log(`Username: ${this.username}`);
        console.log(this)
    }
}

// console.log(user.username)
// console.log(user.getUserDetails())


// constructor Function

// const promiseOne = new Promise();

function User (username, logincount,isloggIn){
    this.username = username;
    this.logincount = logincount;
    this.isloggIn = isloggIn;

    this.what = function(){
        console.log(`welcome ${this.username}`);
    }
    return this;
}

const userOne = new User("hitesh",4,true);
const userTwo = new User("Anshu", 3, false);
 console.log(userOne.constructor);
 