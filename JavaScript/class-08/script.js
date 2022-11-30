const real = [10, 20, 30, 40, 50];

let dolarValue = 5.26;

const convertDolar = real.map((value) => +(value * dolarValue).toFixed(2))


console.log(convertDolar);
console.log(real);

const sumReal = real.reduce((a, b) => (a + b));

console.log(sumReal);


let sumDor = convertDolar.reduce((a, b) => a + b );
console.log(sumDor);



console.log(real.map((value) => (value) * dolarValue).reduce((a, b) => a + b));