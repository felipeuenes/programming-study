const real = [10, 20, 30, 40];

let dolarValue = 5.26;

const convertDolar = real.map((value) => +(value * dolarValue).toFixed(2))


console.log(convertDolar);
console.log(real);