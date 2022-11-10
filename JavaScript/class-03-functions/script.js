function myTest(){
    console.log("Teste")
}

myTest()
myTest()

function somar(num1, num2){
    
    let soma = num1 + num2;
    
    return soma;
}

console.log(somar(20,30));


// >>> Anonnymous <<<


let sum = function (num1, num2){
    
    let soma = num1 + num2;   
    return soma;
}

console.log(sum(2, 3));
