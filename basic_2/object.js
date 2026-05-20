// object literals

const mySym = Symbol("key1")

const user =  {
    name: "divy",
    "full name": "divy patel",
    [mySym]: "myKey1",          // key describe in this way
    age: 19,
    city: "rajkot",
    email: "divy@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(user.email);
// console.log(user["email"]);
// console.log(user["full name"]);  // key describe in this way
// console.log(user[mySym]);


user.email = "abc@gmail.com"
//Object.freeze(user)
user.email = "bc@gmail.com"
//console.log(user);

user.greeting = function(){
    console.log("hello");
    
}

user.greetingTwo = function(){
    console.log(`hello, ${this.name}`);
    
}

// console.log(user.greeting());
// console.log(user.greetingTwo());


// singleton or constructor

const tinderUser = {}

tinderUser.id = "1234ab"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "ab@gmail.com",
    fullname: {
        username: {
            firstname: "divy",
            lastname: "patel"
        }
    }
}
//console.log(regularUser.fullname.username.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = Object.assign(obj1, obj2)

const obj3 = {...obj1, ...obj2}
//console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    course: "JS",
    cousrsePrice: 999,
    courseInstructor: "Divy"
}

//console.log(course.courseInstructor)

const {courseInstructor} = course

console.log(courseInstructor);

