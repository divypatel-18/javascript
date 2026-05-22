const code = ["java", "cpp", "html", "ruby", "js"]

// code.forEach( function (item) {
//     console.log(item);               // in callback function name is not allowed
// } ) 

// code.forEach( (item) => {
//     console.log(item); 
// } )

// function printMe(item){
//     console.log(item);
// }

// code.forEach(printMe)

// code.forEach( (val, index, arr) => {
//     console.log(val, index, arr);
// } )

const coding = [
    {
        languageName: "javascript",
        LanguageFileName: "JS",    
    },
    {
        languageName: "java",
        LanguageFileName: "java",    
    },
    {
        languageName: "python",
        LanguageFileName: "py",    
    }
]

coding.forEach( (val) => {
    console.log(val.LanguageFileName);
    
} )