function setUsername(username){
    this.username = username;
}

function createUser(username,email,passward){
    setUsername.call(this,username)
    this.email = email;
    this.passward = passward;
}

const ab = new createUser("Anshu","anshu@gmail.com","12444")

console.log(ab);
