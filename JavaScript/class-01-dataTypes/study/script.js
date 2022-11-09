

// let num1 = 10;
// let num2 = 40;

// let total = num1 + num2;


// alert("A soma de " + num1 + " e " + num2 + " é " + total );
// alert(`A soma de ${num1} e ${num2} é igual a ${total}`);




// >>>>>> type structural (object, function) <<<<<<


let name = "Felipe"
let age = 19
let profission = "Web Developer"

person = {
    name: "Felipe",
    age: 19,
    profission: "Web Developer"
}

// console.log(name);
// console.log(age);
// console.log(profission);

console.log(typeof person);
console.log(person);


// Array (vetor)


coutreis = [["Brasil", 5], ["Alemanha", 4], ["Espanha", 1]];

// console.log(typeof coutreis);
// console.log(coutreis);
// console.log(coutreis[0]);

coutreis = [
    {
        name: "Brasil",
        champios: 5
    },
    {
        name: "Alemanha",
        champios: 4
    },
    {
        name: "Espanha",
        champios: 1
    }
]

let coutry = 0;

console.log(`${coutreis[coutry].name} tem ${coutreis[coutry].champios} titulo(s) mundiais`)
