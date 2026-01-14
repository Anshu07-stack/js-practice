const promiseOne = new Promise(function (resolve , reject){
    // do an async task
    // database calls, cryptography ,network
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    },1000)
});

// .then ka relation hota h resolve ke sath 

promiseOne.then(function(){
    console.log("Promise consumed");
});

// ----Promise 2---------


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log(function(){
        console.log("Async 2 resolved")
    })
});


// -------Promise 3---------

const PromiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "BGMI", Email: "bgmi@gmail.com"})
    },1000)
})

PromiseThree.then(function(user){
    console.log(user);

});


// ---------Promise 4----------


const PromiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "Anshu", Passward : "12345"})
        }else{
            reject('Error something went wrong')
        }
    },1000)
});

 PromiseFour
 .then((user)=>{
   console.log(user);
   return user.username
})
.then((username)=>{
    console.log(username);
})
.catch((er)=>{
    console.log(er)
})
.finally(()=>{
    console.log("The Promise either reject or resolve")
})


// ----------Promise 5------------


const PromiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "Tamanna ", Passward : "12345"})
        }else{
            reject('Error: Pagal Hogyi')
        }
    },1000)
})

async function consumePromiseFive(){
   try{

    const response = await PromiseFive
    console.log(response);

}
 catch(error){
    console.log(error);
}
}

consumePromiseFive()

// async function getAllUsers() {
//    try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data =await response.json()
//     console.log(data)
//    }catch(error){
//     console.log("E: ",error)
//    }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{

    console.log(data)

})
.catch((error)=> console.log(error))
