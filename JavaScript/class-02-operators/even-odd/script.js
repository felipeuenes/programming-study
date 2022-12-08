let num = window.prompt("Digite um numero para saber se é par ou impar");


console.log(num);

function resto() {
    
    if (num % 2 == 0) {
        window.alert(`Numero ${num} é par`)
    }
    if (num % 2 != 0) {
        window.alert(`Numero ${num} é impar`)
    }
    

}

console.log(resto());
