function MuntiplyBy5(num){
    return num*5;
};

MuntiplyBy5.power = 2;

console.log(MuntiplyBy5(5));
console.log(MuntiplyBy5.power);
console.log(MuntiplyBy5.prototype);

function createUser(username,score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printMe = function (){
    console.log(`score is ${this.score}`)
}


const a = new createUser("Anshu", 22);
const b = new createUser("Amiket",14);


a.printMe();

