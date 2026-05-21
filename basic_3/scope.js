let a = 10

if (true) {
    let a = 100
    // console.log("INNER:", a);
}

    // console.log(a);
    // console.log(b);
    // console.log(c);


    // global scope can access any where 
    // but inside loop or if else scope can't describe outside

    function one (){
        const name = "divy"

        function two (){
        const web = "youtube"
        console.log(name);
    }
   // console.log(web);
    
    // two()

    }

    one()
    
if(true){
    const username = "divy"
    if (username  === "divy"){
            const website = " youtube"
            //  console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


//  *************** IMPORTANT ***************

function addOne(num){
    return num + 1
}

console.log(addOne(5))

const addTWo = function(num){
    return num + 2
}

console.log(addTWo(4))