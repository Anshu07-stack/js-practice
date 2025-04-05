
    // <!-- What is functions -->

        function sayMyname(){
            console.log("anshu")
        }
        // sayMyname()
        // function addTwoNumbers(number1,number2){
        //         console.log(number1+number2)
        // }

        // addTwoNumbers(5,7)

        function addTwoNumbers(number1,number2){
                let result = number1 + number2;
                 return result;
        }
            const result = addTwoNumbers (3,5)
        console.log(result)



        function logInuserMessage(username){
            return `${username} is logged in`
        }
           console.log( logInuserMessage("anshu"))

           function calculateCartPrice( val1,val2,...num1){
            return num1;
           }
            console.log(calculateCartPrice(22,55,45,45))


            const item = {
                fruits: "Mango",
                price:50,
            }

            function handlePrice(anyobject){
                console.log(`the fruit is ${anyobject.fruits}  and the Price is ${anyobject.price}`)
            }            // handlePrice(item)

            handlePrice({
                fruits: "sam",
                price : 400,
            })


            const array =[22,44,55,66,77];

            function getArray(anyArray){
                return anyArray[3]
            }
            console.log(getArray(array))
   