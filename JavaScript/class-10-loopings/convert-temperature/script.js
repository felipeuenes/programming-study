
function degreeConvert(degree) {


    let auxDegree = String(degree.split(" ").join(""))
    let arrayDegree = Array.from(auxDegree)
    let scaleDegree = arrayDegree.pop()
    let newDegree = Number(arrayDegree.join(""));



    console.log(auxDegree);
    console.log(arrayDegree);
    console.log(scaleDegree);
    console.log(newDegree);

    if (!newDegree) {
        throw new Error("Insira uma temperatura válida")
    }



    if (scaleDegree.toUpperCase() == "C") {
        return (newDegree * 9/5 + 32).toLocaleString("pt-br") + "F";
        // console.log(result);
        // document.write(`A conversão de ${newDegree}C para F é ${result}`)
        
        
   }
   if (scaleDegree.toUpperCase() == "F") {
        return ((newDegree - 32) * 5/9).toLocaleString("pt-br") + "C";
        // console.log(result2);
        // document.write(`A conversão de ${newDegree}F para C é ${result2}`)
   }
   
    
    
}


try {
    let temperature = "10f"
console.log(`${temperature.toLowerCase()} = ${degreeConvert(temperature)}`);

} catch (error){
    console.log(error);
}