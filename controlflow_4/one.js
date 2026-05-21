// if statement

// const isUserLoogedIn = true
// const temp = 41

// if(temp < 50){
//     console.log("less than 50");
// }else{
//     console.log("temp is greater than 50");
// }

// const score = 200
// if (score > 100){
//     const power = "fly"
//     console.log(`User power ${power} `);
    
// }

// const balance = 1000
// if(balance < 500){
//     console.log("less than 500");
// } else if(balance < 750){
//     console.log("less than 750");
// } else if(balance < 1200) {
//     console.log("less than 1200");
// }

const UserLoogedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true  

if(UserLoogedIn && debitCard){  // && used for both condition
    console.log("Allow");
}

if(loggedInFromEmail || loggedInFromGoogle){ // || for single condition
    console.log("log in successful");
    
}