const numberMega = [];



while (numberMega.length < 6) {
    let numberDrawn = String(Math.ceil(Math.random() * 60)).padStart(2, 0);

    if (!numberMega.includes(numberDrawn)) {
        numberMega.push(numberDrawn);
        
    }

    
} 

document.write(numberMega.sort((a, b)  => a - b).join("-"));


const div = document.querySelector("#divMega")

div.innerHTML = numberMega;

