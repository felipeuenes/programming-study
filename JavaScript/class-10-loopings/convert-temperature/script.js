
function degreeConvert(degree) {
   
    let arrayDegree = Array.from(degree)
    let scaleDegree = arrayDegree.pop()
    let newDegree = Number(arrayDegree.join(""));




    console.log(arrayDegree);
    console.log(scaleDegree);
    console.log(newDegree);



    

    if (scaleDegree == "C") {
        let result = newDegree * 9/5 + 32;
        return result
   }
   if (scaleDegree == "F") {
    
   }
   
    return degree
    
}


try {
    let temperature = "10C"
console.log(`${temperature.toUpperCase()} = ${degreeConvert(temperature)}`);
} catch (error){
    console.log(error);
}