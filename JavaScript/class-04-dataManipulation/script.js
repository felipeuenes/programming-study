// Prototype

function Car(motorPower){
    this.motor = motorPower;

}

let myName = "Felipe";
let age = 19;
let phrase = "Eu sou web developer"


console.log(myName.__proto__);

// diz quantos caracteres tem:
console.log(myName.length);

// pega a primeira letra:
console.log(myName[0]);

// deixar tudo minusculo:
console.log(myName.toLocaleLowerCase());

// Separa por espaços:
console.log(phrase.split(" "));

// substitui espaços por _:
console.log(phrase.split(" ").join("_"));