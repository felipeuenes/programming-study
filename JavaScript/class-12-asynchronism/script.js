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

// console.log('Fazer requisição');



// const promise = new Promise((resolve, reject) => {

// let request = true

//     if (request) {
//         return resolve('Requisição aceita')
//     } else {
//         return reject('requisição não aceita')
//     }


// })

// console.log(promise);

// promise
// .then((answer) => console.log(answer))
// .catch((error) => console.log(error))
// .finally(() => console.log('Requisição encerrada!'));



// async function requestData() {
//     try {
//         const apromise = await promise; 
//         console.log(promise);  
        
//     } catch (error) {
//         console.log(error);
//     } finally {
//         console.log("Requisição encerrada");
//     }
   
// }

// requestData()


// console.log('Finalizar requisição');

// const user = 'EmanuelQuintino'
// const url = `https://api.github.com/users/${user}`

// const userGitHub = fetch(url);



// userGitHub
// .then((request) => request.json())
// .then(({name, bio}) => console.log(name, bio));

// console.log(userGitHub);




// const userName = 'EmanuelQuintino'
// const url = `https://api.github.com/users/${userName}`
// const gitHubUser = fetch(url);

// gitHubUser
//     .then(request => request.json())
//     .then(({ name, bio }) => ({
//             name,
//             bio,
//         })
//     )

// console.log(gitHubUser);


// gitHubUser()




async function userGitHubData(user) {
    try {
        // const url = `https://api.github.com/users/${user}`
    await fetch(`https://api.github.com/users/${user}`)
        .then((request) => request.json())
        .then((data) => console.log(`${data.name}: ${data.bio}`));
            
    } catch (error) {
        console.log(error);
    } finally {
        console.log('requisição encerrada!');
    }
}

userGitHubData('EmanuelQuintino')
userGitHubData('Mario13Sergio')
userGitHubData('felipeuenes')
userGitHubData('jose-murilo')