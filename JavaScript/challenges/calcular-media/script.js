

// function calc() {
//     let nome = document.querySelector("#name");
    
//     console.log(nome);
    
// }
while (true) {
    
    alert("Vamos calcular a média anual do aluno")
    
    let nome = prompt("Digite seu nome")
    
    let n1 = Number(prompt("Digite a primeira nota:"))
    if (n1 > 10) {
        alert("Nota máxima é 10")
    }
    let n2 = Number(prompt("Digite a segunda nota:"))
    if (n2 > 10) {
        alert("Nota máxima é 10")
    }
    let n3 = Number(prompt("Digite a terceira nota:"))
    if (n3 > 10) {
        alert("Nota máxima é 10")
    }

    let n4 = Number(prompt("Digite a quarta nota:"))
    if (n4 > 10) {
        alert("Nota máxima é 10")
    }
    
    let media = (n1 + n2 + n3 + n4) / 4;
    
    console.log(media);
    alert(`A média de ${nome} é ${media}`)
    
    console.log(nome);
}
    alert("Programa encerrado")
    