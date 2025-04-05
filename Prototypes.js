const hero =  ['Anshu','vishal'];

const power = {
    ironman:'suit',
    superman: 'fly',
    spiderman: 'webs'
}

Object.prototype.new = ()=>{
    console.log('Succesfully...')
}

Array.prototype.anshu = ()=>{
    console.log("hey there!")
}

hero.anshu()

// inheritence

const user = {
    username:'Aniket',
    email:'ani@gmail.com'
}

const teacher = {
    makevideo:true,

}


const teacingSupport = {
    isAvailable:false,

}

const TASupport = {
    makeAssignment: 'Js Assignment',
    fullTime:true,
    __proto__:teacingSupport
}

teacher.__proto__ = user

// modern Syntax

Object.setPrototypeOf(teacingSupport,teacher)

let anotherUsername = 'abhi'

String.prototype.trueLength = ()=>{
    console.log(`${this}`)
    console.log(`${this.name}`)
    console.log(` true length is : ${this.trim().length}`)


}

anotherUsername.trueLength()