// console.log('Início');
// setTimeout(() => {
//   console.log('Lógica')},  1000)
// console.log('Fim');

// setInterval(() => {
//     console.log('SetInterval');
// }, 6500)



// const arrayNumbers = [12,20,30,45,66,70];
// const arrayAux = [];
// let count = 0;
// let int = setInterval(() => {
//     arrayAux.push(arrayNumbers[count]);
//     const numbers = document.querySelector('.numbers');
//     numbers.innerHTML = arrayAux;

//     if (arrayAux.length == arrayNumbers.length) {
//         clearTimeout(out);
//         clearInterval(int);
//     }
//     count++
// }, 1500);


// let out = setTimeout(() => {
//     console.log('Fim');
// })


// >>>>>> Promises <<<<<<<<

console.log('Fazer requisição');



const promise = new Promise((resolve, reject) => {

let request = true

    if (request) {
        return resolve('Requisição aceita')
    } else {
        return reject('requisição não aceita')
    }


})

console.log(promise);

// promise
// .then((answer) => console.log(answer))
// .catch((error) => console.log(error))
// .finally(() => console.log('Requisição encerrada!'));



async function requestData() {
    try {
        const apromise = await promise; 
        console.log(promise);  
        
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Requisição encerrada");
    }
   
}

requestData()


// console.log('Finalizar requisição');