


const incomes = [
    'salary', 'R$ 2000,00',
    'commission', 'R$ 825,45',
    'bonus', 'R$ 320,00',
]

let incomeValues = incomes.filter((value) => value.includes('R$'));

let incomesValueNumbers = incomeValues.map((value) => Number(value.replace('R$ ', "").replace(',','.')))

let incomeSum = incomesValueNumbers.reduce((a, b) => a + b)

console.log(incomeValues);
console.log(incomesValueNumbers);
console.log(incomeSum);

const expenses = [
    'rent', 'R$ 500,00',
    'energy', 'R$ 325,55',
    'water', 'R$ 120,34',
    'food', 'R$ 1300,62',
]

 
let balence = incomeSum - expensesSum;



console.log(`Os gastos foram: ${incomeSum}`);
console.log(`As despesas foram: ${expensesSum}`);
console.log(`O saldo foi de: ${balence}`);