// Immediately Invoked Function Expression (IIFE)

(function chai (){
    // named IIFE (Bcz Function is name)
    console.log(`DB Connected`);
})(); // ; -> it is used to end code

( (name) => {
    // without Name IIFE
    console.log(`Successful ${name}`);
} ) ("divy")

// Interview - Global scope ke pollution se problem hoti ha kaiibar to remove pollution that pollution we use iife