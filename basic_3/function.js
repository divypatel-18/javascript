function sayMyName(){
    console.log("D");
    console.log("I");
    console.log("V");
    console.log("Y");
}

// sayMyName()

// function addTwoNumber(num1, num2){
//     console.log(num1 + num2);   
// }

function addTwoNumber(num1, num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = addTwoNumber(4, 4)

// console.log("Result:", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Divy"))
// console.log(loginUserMessage("divu"))

function calculateCartPrice(...num1){ // rest operator ...
    return num1
}

// console.log(calculateCartPrice(200, 400, 500))

const user = {
    username: "divy",
    price: 200
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);   
}

// handleObject(user)

handleObject({
    username: "sam",
    price: 99
})

const myArr = [1, 2, 3, 4]

function returnSecondValue(getArr){
    return getArr[3]
}

// console.log(returnSecondValue(myArr));
console.log(returnSecondValue([1, 2, 3, 4]));
