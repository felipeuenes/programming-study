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



// >>> Arrow <<<



let susm = (num1, num2) => num1 + num2;

console.log(sum(3, 3));


// >>> Constructor <<<



function Car(brandName, motorPower){
        this.brand = brandName
        this.motor = motorPower
        this.walk = () => {
           console.log("Running..."); 
        }

}

const uno = new Car("Fiat", "1.4");

console.log(uno);
console.log(uno.brand);
console.log(uno.motor);
console.log(uno.walk());




