const user = {
    username: "divy",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);  // This is used to refer current contex
        
    }

}
// user.welcomeMessage()
// user.username = "Sam" // this here curent contexthas been changed
// user.welcomeMessage()

// function one(){
//     let username = "divy"
//     console.log(this.username); // this can't work in function it is work in object
    
// }

// one()

const chai = () => {
    let username = "divy"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {  // explicit return (with return )
//     return num1 + num2
// }

const addTwo = (num1, num2) =>  num1 + num2 // implicit return (without return in single line)
console.log(addTwo(3,4));


