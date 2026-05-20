// array

const myArr = [0, 1, 2, 3, 4, 5]

//const myHero = ["ironman", "batman"]

//console.log(myArr[2]);

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

//myArr.unshift(0)
myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));

// const newArr = myArr.join

// console.log(myArr);
// console.log(newArr);

//console.log("A", myArr);

const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
// console.log("C", myArr);
// console.log(myn2);


const myHero = ["ironman", "batman"]

const dc = ["flash", "spiderman"]

//myHero.push(dc)

// console.log(myHero);

// const allHero = myHero.concat(dc)
// console.log(allHero);

// const all_new_hero = [...myHero, ...dc]

// console.log(all_new_hero);

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = anotherArr.flat(Infinity)

console.log(real_another_array);


console.log(Array.isArray("Divy"))
console.log(Array.from("Divy"))
console.log(Array.from({name: "divy"})) // interview we have to decribe array for key or value

let score = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score, score2, score3));
