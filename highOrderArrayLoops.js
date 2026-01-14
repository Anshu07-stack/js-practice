// for off

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for(const num of arr)
{
    // console.log(num);
}

const greetings = "hello anshu"

for(const str of greetings){
    // console.log(`each char is ${str}`);
}



const a = new Map()

a.set('anshu','age=21')
a.set('country','India')
a.set('us','united states')
a.set('fr','france')
a.set('pak','pakisan')

// console.log(a);

for (const [key, value] of a){
    // console.log(key , ":-" , value );

}

// way to ittrate object

// -----using for in loop------

const myObject = {
    js : "javaScript",
    cpp : "c++",
    py : "python",
    rb : "ruby"
}

for (const key in myObject){
    // console.log(`${key} shotcut for ${myObject[key]}`)
}


// -----------for each loop--------

const coding =[ "js", "ruby", "java", "cpp"]

// coding.forEach( (value)=>{
//     console.log(value)
// } )


coding.forEach( (value , index , r)=>{
    // console.log(value ,index ,r);
} )


// const myNums = [1,2,3,4,5,6,7,8,9,10]

// //   const newNus = myNums.filter( (num)=> {
// //        return num > 4;
// //   });

// //   console.log(newNus)

// const newNum = [];

//     myNums.forEach( (num) => {
//         if(num>4){
//             newNum.push(num)
//         }
//     } );

//     console.log(newNum)