// let myName = "divy      "
// console.log(myName.trueLength);

let myHero = ["thor", "hulk"]

let heroPower = {
    thor: "hammer",
    hulk: "body",

    getHulkPower: function(){
        console.log(`Hulk power is ${this.hulk}`);
    }
}

Object.prototype.divy = function(){
    console.log(`divy is present in all object`);
    
}

// heroPower.divy()

Array.prototype.heydivy = function(){
    console.log(`divy says hi`);
    
}

// myHero.divy()
// myHero.heydivy()
// heroPower.heydivy()

// inheritance

const user = {
    name: "chai",
    email: "chai@gmail"
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvaible: false
}

const taSupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: teachingSupport
}
teacher.__proto__ = user

// modern syntax

Object.setPrototypeOf(teachingSupport, teacher)

let anotherUsername = "chai        "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length} `);
}

anotherUsername.trueLength()
"divy".trueLength()
"tea".trueLength()