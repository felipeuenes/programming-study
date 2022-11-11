function calcIMC(pacient){

    let imc = pacient.weigth / (pacient.heigth / 100) ** 2;
    


    return imc.toFixed(2);
}

const listPacient = [
    {
        name: "Maria",
        heigth: 169,
        weigth: 60

    },
    {
        name: "João",
        heigth: 179,
        weigth: 80

    },
]

document.write(`O IMC de ${listPacient[0].name} é ${calcIMC(pacient[0])}`);

// let num = [1, "e", 3 ]