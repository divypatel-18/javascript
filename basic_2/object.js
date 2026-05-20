//singleton

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

console.log(user.greeting());
console.log(user.greetingTwo());
