const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNum = num.map( (num) => num + 10)

const newNum = num
    .map( (numb) => numb * 10)
    .map( (numb) => numb + 1)
    .filter( (numb) => numb >= 40)               // if we use two time map in continuity then it is called chaining
console.log(newNum);
