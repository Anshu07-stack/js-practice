
const myNums = [1,2,3,4,5,6,7,8,9,10]

  const newNus = myNums.filter( (num)=> {
       return num > 4;
  });

//   console.log(newNus)

const tenObjects = [
    { name: "Apple", color: "Red" },
    { name: "Banana", color: "Yellow" },
    { name: "Orange", color: "Orange" },
    { name: "Grape", color: "Purple" },
    { name: "Strawberry", color: "Red" },
    { name: "Pear", color: "Green" },
    { name: "Mango", color: "Yellow" },
    { name: "Pineapple", color: "Yellow" },
    { name: "Watermelon", color: "Green" },
    { name: "Blueberry", color: "Blue" }
  ];

  const user = tenObjects.filter((fruits) => {
     return fruits.color ==="Yellow"  && fruits.name ==="Pineapple"
  });

  console.log(user)