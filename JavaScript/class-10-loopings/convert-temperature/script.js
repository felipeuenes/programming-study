
function degreeConvert(degree) {
   
    let arrayDegree = Array.from(degree)
    let scaleDegree = arrayDegree.pop()
    let newDegree = Number(arrayDegree.join(""));




    console.log(arrayDegree);
    console.log(scaleDegree);
    console.log(newDegree);





    if (scaleDegree == "C") {
        return (newDegree * 9/5 + 32) + "F";
        // console.log(result);
        // document.write(`A conversão de ${newDegree}C para F é ${result}`)
        
        
   }
   if (scaleDegree == "F") {
        return ((newDegree - 32) * 5/9) + "C";
        // console.log(result2);
        // document.write(`A conversão de ${newDegree}F para C é ${result2}`)
   }
   
    
    
}


try {
    let temperature = "50F"
console.log(`${temperature.toUpperCase()} = ${degreeConvert(temperature)}`);

// degreeConvert(temperature)
// console.log(degreeConvert(temperature));

} catch (error){
    console.log(error);
}