const numberMega = [];



while (numberMega.length < 6) {
    let numberDrawn = Math.ceil(Math.random() * 100);

    if (!numberMega.includes(numberDrawn)) {
        numberMega.push(numberDrawn);
        
    }

    
} 

document.write(numberMega);



