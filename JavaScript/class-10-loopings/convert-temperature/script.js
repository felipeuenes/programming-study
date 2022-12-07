
function degreeConvert(degree) {


    let auxDegree = String(degree.split(" ").join(""))
    let arrayDegree = Array.from(auxDegree)
    let scaleDegree = arrayDegree.pop()
    let newDegree = Number(arrayDegree.join(""));



    console.log(auxDegree);
    console.log(arrayDegree);
    console.log(scaleDegree);
    console.log(newDegree);

    if (newDegree == NaN) {
        throw new Error("Insira uma temperatura válida")
    }



    if (scaleDegree.toUpperCase() == "C") {
        return (newDegree * 9/5 + 32).toLocaleString("pt-br") + "F";
    
        
   } else if (scaleDegree.toUpperCase() == "F") {
        return ((newDegree - 32) * 5/9).toLocaleString("pt-br") + "C";
      
   } else{
        throw new Error("Escala inválida");
   }
   
    
    
}


try {
    let temperature = "aaa0c"
console.log(`${temperature.toLowerCase()} = ${degreeConvert(temperature)}`);

} catch (error){
    console.log(error);
}