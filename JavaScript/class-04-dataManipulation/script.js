// Prototype

function Car(motorPower){
    this.motor = motorPower;

}

let myName = "Felipe";
let age = 19;
let phrase = "Eu sou Web developer"


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

// verificar palavras:
console.log(phrase.includes("web"));

// deixar variavel minuscula e verificar
console.log(phrase.toLocaleLowerCase().includes("web"));

// >>>>>>> Number <<<<<<<<<

let num = 754545;
let num1 = 7.287;
let num2 = 7.9876;

// Pegar o tamanho numérico, transforma em string e usa o length:
console.log(String(num).length);

// tirar os pontos e substituir por vazio:
console.log(String(num1).replace(".", "").length);


console.log(Number(num1).toFixed(2))

// tirar ponto e colcoar virgula:
console.log(String(num2.toFixed(2)).replace(".",","));



// Convert Currency
console.log(num1.toLocaleString("pt-BR", {style: "currency", currency: "brl"}));
console.log(num1.toLocaleString("pt-BR", {style: "currency", currency: "usd"}));


let sortiados = [];
let win = false;
let aux = 0;


while (aux < 10) {
   let num = Math.round(Math.random() * 10)
    
    if(!sortiados.includes(num)){
        console.log(num);
        sortiados[aux] = num;
    }
    aux++
}


console.log(sortiados);



// >>>>>>>>>>>> Segunda parte da aula <<<<<<<<<<<<<<<<


let date = new Date();
let date1 = new Date('2022-11-17 12:03:19');


let hour = date1.getHours();
let minutes = date1.getMinutes();
let seconds = date1.getSeconds();

// document.write(`${String(hour).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`)

// document.write(date);
// document.write(date1.getSeconds());

// document.write(date.toLocaleTimeString('pt-BR'));



date1.setHours(date1.getHours() - 3)
date1.setMinutes(date1.getMinutes() + 30)
date1.setSeconds(date1.getSeconds() + 15)

document.write(date1.toLocaleTimeString())