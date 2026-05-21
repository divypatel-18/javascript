//for 

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("5 is best");
        
    }
    // console.log(element);
}

for (let i = 0; i <= 10; i++) {
        // console.log(`Outer loop ${i}`);
        
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop ${j} and inner value ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j);
        
    }
    const element = i;
    
}

let Arr = ["Flash","Man","batman"]
// console.log(Arr.length);


for (let i = 0; i < Arr.length; i++) {
    const element = Arr[i];
    // console.log(element);
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log("5 Deteced");
//         break
//     }
//     console.log(`Value of i is ${index}`);    
// }

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log("5 Deteced");
        continue
    }
    console.log(`Value of i is ${index}`);    
}