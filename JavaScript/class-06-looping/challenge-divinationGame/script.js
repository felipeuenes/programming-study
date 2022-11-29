const numberRandom = Math.ceil(Math.random() * 10);
// const numberRandom = 1;

let count = 1;

while(true){
    let numberUser = prompt("Digite um numero de 1 a 10");
    if(numberUser == numberRandom){
        alert(`Parabéns, acertou o numero ${numberRandom} em ${count} tentativas`)
        break;
    }

    if(numberUser == null){
        alert("Programa encerrado")
        break;
    }

    count++
}



console.log(numberRandom);

document.write(numberRandom);