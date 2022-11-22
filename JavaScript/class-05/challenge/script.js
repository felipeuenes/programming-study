
// let newnote1 = nota1.value

// console.log(nota1)



function calcular (){
    let nota1 = Number(document.getElementById("n1").value);
    let nota2 = Number(document.getElementById("n2").value);
    
    let nome = (document.getElementById("nome").value);
    // console.log(nota1)
    // console.log(nota2)
    
    resultado = (nota1 + nota2) / 2;

    document.write(`${nome} tem a média ${resultado}`)


    if(resultado > 6){
    document.write("Aluno aprovado");
}
else{
    document.write("Aluno reprovado");
}
}


