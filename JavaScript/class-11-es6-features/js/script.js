// import { sum, mult, sub, div } from "./functions.js";
import { operations } from "./functions.js";


// operations.mult(2, 2)
// operations.sub(2, 2)
// operations.sum(2, 2)
// operations.div(2, 2)

// sum(2, 6);
// sub(5, 5);
// div(8, 5);
// mult(2, 2);

class Person {
    constructor(name, age){
        this.name = name,
        this.age = age
    }
}


const person1 = new Person('Felipe', 30);

console.log(person1.name);
console.log(person1.age);