class user{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends user{
    constructor(username,email, password){
        super(username)                         // in this there is no need to call and this 
        this.email = email;
        this.password = password;
    }
    addCourses(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@gmail.com", "123")

chai.logMe()
const tea = new user("Tea")

tea.logMe()

console.log(chai instanceof user);