class user{
    constructor(username){
        this.username = username;
    }
    LogMe(){
        console.log(`username is ${this.username}`)
    }
}

class teacher extends user{
    constructor(username,email,passward){
        super(username)
        this.passward = passward;
        this.email = email;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}


const anshu = new teacher("tamanna","tammanna@gmail.com","123")

anshu.addCourse()
