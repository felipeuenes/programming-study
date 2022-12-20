const btn = document.querySelector(".calculate-button");

btn.addEventListener("click", (e) => {
    e.preventDefault()
    const heigth = Number(document.querySelector("#height").value)
    const peso = Number(document.querySelector("#peso").value)

    const imc = (peso / (heigth / 100) ** 2).toFixed(2)

    console.log(imc);

    
    
    let situation = ''
    
    if (imc < 18.5) {
        situation = 'Magreza'
    }
    else if (imc >= 18.5 && imc < 24.9) {
        situation = 'Normal'
    }
    else if(imc >= 24.9 && imc < 29.9){
        situation = 'Sobre peso'
    }
    else if(imc >= 29.9 && imc < 34.9){
        situation = 'Obesidade I'
    }
    else if(imc >= 34.9 && imc < 39.9){
        situation = 'Obesidade II'
    }
    else if(imc >= 39.9){
        situation = 'Obesidade III'
    }
    
    const result = document.querySelector(".result")
    result.innerHTML = `Seu IMC é ${imc}, ${situation}`
    console.log(result);
    
    const containerModal = document.querySelector('.container-modal');
    
    containerModal.style.display = 'grid'
    
})


const containerModal = document.querySelector('.container-modal');
btnX = document.querySelector(".x")


btnX.addEventListener("click", (e) => {
    e.preventDefault()
    containerModal.style.display = 'none'

})