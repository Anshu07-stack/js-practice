const user = {
    username:"anshu",
    age:"22",

    welcomeMessage : function(){
        console.log(`${this.username} , welcome here`)
        console.log(this)
    }
}

// user.welcomeMessage()

// user.username = "aniket"
// user.welcomeMessage()

// function anshu(){
//     let username = "anshu"
//     console.log(this.username)
// }
 
// anshu()

           const anshu = () =>{
             let username="anshu";
             console.log(this.username)
           }

        //    anshu()

        const add = (num1,num2) =>{
            return num1 + num2;
        }
        // console.log(add(54,5))

            //  ------implisit return-----


            const addtwo = (num1,num2) => num1 + num2
            // console.log(addtwo(33,33))

            // ------------------------------