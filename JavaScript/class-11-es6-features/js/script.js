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

// class Person {
//     constructor(name, age, canDrive){
//         this.name = name,
//         this.age = age,
//         this.canDrive = age >= 18;
//     }
// }


// const person1 = new Person('Felipe', 19);

// console.log(person1.name);
// console.log(person1.age);
// console.log(person1.canDrive);

// const person2 = new Person('Murilo', 16);

// console.log(person2.name);
// console.log(person2.age);
// console.log(person2.canDrive);




// // Factory


// function person(name, age) {
//     return {
//         name,
//         age,
//         canDrive: age >= 18,
//         status: function status(canDrive){
//             if (this.canDrive) {
//                 return 'Pode dirigir'
//             } else {
//                 return 'Não pode dirigir'
//             }
//         }
//     }
// }

// console.log(person("Felipe", 19));




// Destructure

const array = ['A', 'B']
const [item1, item2] = array


console.log(array);
console.log(item1);
console.log(item2);



//Rest

function showArray(array, ...numbers) {
    console.log(array, numbers);
}

showArray(array,2,3,5,6,4)


//Spread

const numbers = [2,3,5,7,5]
const [...clone] = numbers

clone.pop()

console.log(numbers);
console.log(clone);

console.log(Math.max(...numbers));
