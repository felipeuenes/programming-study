let nota1 = Number(document.getElementById("#n1"));

let nota2 = Number(document.getElementById("#n2"));

let nome = document.getElementById("#nome");


function calcular (){
    resultado = (nota1 + nota2) / 2;

    document.write(`${nome} tem a média ${resultado}`)

}

