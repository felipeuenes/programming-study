// Loopings


// while

// function calcular(){
    
//     let nota1 = Number(document.getElementById("n1").value);
//     let nota2 = Number(document.getElementById("n2").value);

//     let nome = getElementById("name").value;

//     let resultado = (nota1 + nota2) / 2;

//     document.write(`${nome}Sua média é ${resultado}`)

//     while (resultado < 6){
//         document.write("Reprovado");

//     }

// }





// for (let count = 0; count <= 10; count++) {
//     if (count % 2 == 1){
//         console.log(count);
//     }

    
    
// }

// let resp = true;

// while (resp){
//     resp = prompt("Digite seu nome");
// }

const array = [1, 'A', () => "Teste"]

for (let count = 0; count < array.length; count++) {
    const element = array[count];
    console.log(element)
    
}

for (const value of array) {
    console.log(value);
}