let ar1 = [1,2,3,4,5,6,7,8,9,10]

//  let ar2 = ar1.map( (values) => {
//     return values + 10;
// } );

let ar2 = ar1
.map( (values) =>  values * 10 )
.map( (values) => values + 1 )
// .filter( (values) => values >=40 )

console.log(ar2)