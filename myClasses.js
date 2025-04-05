class user {
    constructor(username, email,passward){
        this.username = username;
        this.email = email;
        this.passward = passward;
    }

    encryptPassward(){
        return `${this.passward}abc`
    }

    cahngeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const anshu =  new user("anshu", "anshu@gmail.com", "123")

console.log(anshu.encryptPassward());
console.log(anshu.cahngeUsername());


// behind the seen

function user (username, email,passward){
    this.username = username;
    this.email = email;
    this.passward = passward;
}