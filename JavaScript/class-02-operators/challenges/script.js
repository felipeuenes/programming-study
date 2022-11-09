function enviar(){
    let num1 = Number(document.getElementById("first").value);
    let num2 = Number(document.getElementById("secund").value);

    let soma = num1 + num2; 
    let sub = num1 - num2; 
    let divi = num1 / num2; 
    let mult = num1 * num2; 
    let resto = num1 % num2;
    let poten = num1 ** num2;
    let raiz = num1 ** (1/num2);

    document.write(`A soma de ${num1} + ${num2} = ${soma} <br>
              A subtração de ${num1} - ${num2} = ${sub}
    <br>
            A divisão de ${num1} / ${num2} = ${divi.toFixed(2)}
    <br>    
            A multiplicação de ${num1} * ${num2} = ${mult} 
     <br>  
            O resto da divisão de ${num1} e ${num2} é igual a ${resto}
     <br>  
            A potencia de ${num1} elevado a ${num2} é igual a ${poten}
    <br>
            A raiz ${num1} de ${num2} é igual a ${raiz.toFixed(2)}


    `)
    
}

