
function degreeConvert(degree) {
   
    let arrayDegree = Array.from(degree)
    let scaleDegree = arrayDegree.pop()
    let newDegree = Number(arrayDegree.join(""));




    console.log(arrayDegree);
    console.log(scaleDegree);
    console.log(newDegree);





    if (scaleDegree == "C") {
        let result = newDegree * 9/5 + 32;
        console.log(result);
        document.write(`A conversão de ${newDegree}C para F é ${result}`)
        
        
   }
   if (scaleDegree == "F") {
        let result2 = (newDegree - 32) * 5/9;
        console.log(result2);
        document.write(`A conversão de ${newDegree}F para C é ${result2}`)
   }
   
    return degree
    
}


try {
    let temperature = "10C"
console.log(`${temperature.toUpperCase()} = ${degreeConvert(temperature)}`);
} catch (error){
    console.log(error);
}