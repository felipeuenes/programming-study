let techs = ['HTML', 15, 'CSS', 15, 'JavaScript', 30, 'SQL', 10, 'Git',8]

function deleteArrayElement (techName){
    let auxArray = techs;

    auxArray.map(element =>{
        
        document.write(`${element} <br>`)
        
        if(String(techName).toLocaleLowerCase()) == String(element).toLocaleLowerCase()){
            window.alert(element)
        }
    })
}

deleteArrayElement("CSS")
document.write(techs);

