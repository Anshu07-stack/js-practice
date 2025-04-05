const num = [1,2,3]

// const total = num.reduce(function (accumilator,currentValue){
//     console.log(`acc: ${accumilator} and current value is ${currentValue}`)
//    return accumilator * currentValue
// },2)


const total = num.reduce( (accumilator,currentValue) => accumilator + currentValue ,0 )
console.log(total)