// Questão 1 (Data Types):
// Declare as seguntes variáveis e atribua os valores por tipo: Sting, Number, Function, Array, Object


let string = "Eu sou uma string"
let number = 1

let array = ["Exemple", 2, "Exemple"] 
function numero() {
    return numero;
}

let Object = {
    nome: 'Felipe',
    sobrenome: 'Uenes',

}

console.log(typeof(array));
console.log(typeof(number));
console.log(typeof(string));
console.log(typeof(numero));



// Questão 2 (Operators):
// Imprima as operações de soma, subtração, multiplicação, divisão, resto da divisão e potenciação de 12 e 3 e raiz quadrada de 144;


let soma = 12 + 3;
console.log(soma);

let sub = 12 - 3
console.log(sub);

let mult = 12 * 3;
console.log(mult);

let rest = 12 % 3
console.log(rest);

let raiz = Math.sqrt(144);
console.log(raiz);



// Questão 3 (Functions):
// Crie e execute uma função de nome 'test" que retorne "JavaScript" e imprima seu retorno.

function test() {
    return "JavaScript"
}
console.log(test());


// Questão 4 (Data Manipulation):
// Usando os métodos FIFO e LIFO, crie um array com 3 valos e posteriormente insira mais um valor no final e substitua o do início por outro.

const array2 = ["valor 1", "valor 2", "valor 3"]

array2.push("Valor 4")
array2.splice(0, 1, "subistuido")

console.log(array2);


// Questão 5 (for):
// Liste todos os valores do array criado na questão anterior ultilizando o for.

for (let array2 = 0; array2 < array.length; array2++) {
    const element = array[array2];
    console.log(array2);
}


// Questão 6 (while):
// Escreva os números de 0 a 500 sem os que pertencem à familía do 200 e do 300:

let numbers = 0
while (numbers < 500) {

    // let numbers = 100
    // console.log(numbers);

    if (numbers < 200 || numbers >= 400) {
        console.log(numbers);
        numbers++
    } else {
        numbers++
        continue
    }
    // console.log(numbers);
    
}


// Questão 7 (if):
// Crie uma lógica para verificar se o motorista foi multado
// A infração pode ser por velocidade alta (quando ultrapassar a máxima)
// E por velocidade baixa ( quando estiver inferior à metade da máxima )
// A velocidade da pista é de 60km/h


let speed = 60

if (speed > 60 && speed < 80) {
    console.log("Velocidade máxima ultrapassada, motorista multado");
}

if (speed == 60) {
    console.log("Cuidado, valocidade máxima atingida!");
}


if (speed < 60) {
    console.log("velocidade estável");
}


// Questão 8 (array methods):
// Uma empresa vai dar 10% de aumento para seus funcionários
// Abaixo tem a lista com todos os salários atuais de cada um deles
// Apresente os novos salários e o novo total em folha dessa empresa



let salario = [
    'João', 'R$ 1200,00',
    'Ricardo', 'R$ 2000,00',
    'Paulo', 'R$ 1000,00'
]



let removeRS = salario.filter((value) => value.includes('R$'));

let valueSalario = removeRS.map((value) => Number(value.replace('R$ ', "").replace(',','.')))

console.log(removeRS);
console.log(valueSalario);

let somaS = valueSalario.reduce((a, b) => a + b)

console.log(somaS.toLocaleString('pt-br', {style: 'currency', currency: 'brl'}))

