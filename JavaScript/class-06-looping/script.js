// Loopings


// while

function calcular(){
    
    let nota1 = Number(document.getElementById("n1").value);
    let nota2 = Number(document.getElementById("n2").value);

    let resultado = (nota1 + nota2) / 2;

    document.write(`Sua média é ${resultado}`)

    while (resultado < 6){
        document.write("Reprovado");

    }

}
