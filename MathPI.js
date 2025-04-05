 const descriptor = Object.getOwnPropertyDescriptor(Math , "PI")

// console.log(descriptor);

// const newObj = Object.create(null)

// console.log(newObj);

const anshu = {
    name : 'mango',
    price : 330,
    isAvailable : true,
    
    ab:function(){
        console.log("code fat gya ")
    }
};

console.log(Object.getOwnPropertyDescriptor(anshu,"price"));

// Object.defineProperties(anshu , {
//     price: {
//         writable : false,
//         enaumerable : false
//     }
// })

// console.log(Object.getOwnPropertyDescriptor(anshu,"price"));


for (let  [key,value] of Object.entries(anshu)) {
    if(typeof value !== 'function'){
        console.log(`${key}:${value}`);
        
    }
}