


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



let expenseValues = expenses.filter((value) => value.includes('R$'));

let expenseValueNumbers = expenseValues.map((value) => Number(value.replace('R$ ', "").replace(',','.')))

let expenseSum = expenseValueNumbers.reduce((a, b) => a + b)

console.log(expenseValues);
console.log(expenseValueNumbers);
console.log(expenseSum);

 
let balence = incomeSum - expenseSum;

let situation

if (balence < 0) {
    situation = 'Welcome to Serasa'
} else if (situation == 0) {
    situation = 'Escapou fedendo'
} else{
    situation = 'Congratularions, tu é o bichão'
}


console.log(`Os gastos foram: ${incomeSum}`);
console.log(`As despesas foram: ${expenseSum}`);
console.log(`O saldo foi de: ${balence.toLocaleString('pt-br', {style: 'currency', currency: 'brl'})}`);


console.log(situation);