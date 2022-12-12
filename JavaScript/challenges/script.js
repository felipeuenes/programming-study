// Faça um Menu com as seguintes opções:
/*
    Digite a opção desejada:

    1 - Cadastrar item
    2 - Remover item cadastrado
    3 - Ver itens cadastrados
    4 - Sair do programa
*/

// Fazer alerta de item cadastrado caso o mesmo já esteja cadastrado
// Se não houver itens cadastrados mostrar mensagem de alerta nas opções
// Mostrar mensagem de sucesso junto do nome ao cadastrar ou remover ítem
// O programa também deve ser encerrado em caso do usuário não digitar valor.


// let item = window.prompt(`Digite a opção desejada:
// ================
// 1 - Cadastrar item
// 2 - Remover item cadastrado
// 3 - Ver itens cadastrados
// 4 - Sair do programa`)

// console.log(item);

// let banco = [];

// switch (item) {
//     case "1":
//         let itemCadas = prompt("Digite o item para cadastrar")
        
//         banco.push(itemCadas);

//         alert(`Item ${itemCadas} cadastrado!`)
        
//         let cadastroOutro = prompt("Deseja cadastrar outro? (responda sim ou não)")
        
// while (cadastroOutro == "sim") {
    
// }
//     break;
//     case "1":
        
//         break;
//     case "2":
        
//         break;
//     case "3":
        
//         break;
//     case "4":
        
//         break;

//     default:
//         break;
// }

// console.log(banco);

const listItens = []
let menuOption
while (true) {
    
    
    let menuOption = prompt(`    Digite a opção desejada:
    ================
    1 - Cadastrar item
    2 - Ver itens cadastrados
    3 - Remover item cadastrado
    4 - Sair do programa`)
    
    if (menuOption === '4' || menuOption === null) {
        break
    }

    if (menuOption == "") {
        alert("Digite uma opção!")
        continue
    }

    console.log(menuOption);
    
    
    
    
switch (menuOption) {
    case "1":
        while (true) {
            
            let item = prompt("Digite o item:")
            
            if (item == null) {
                break;
            }
            if (item == "") {
                alert('Digite um item para cadastrar')
                continue;   
            }
            
            if (listItens.includes(item)) {
                alert(`"${item}" já está cadastrado`)
            } else {
                listItens.push(item)
                alert(`"${item}" cadastrado com sucesso!`)
                
            }
            
            console.log(item);
        }
        console.log(listItens);
        
        break;

    case "2":
        if (listItens.length == 0) {
            alert("Lista vazia!")
        } else {
            alert(listItens.join(", "))
        }
      break;
        
    default:
      break;
    }
            
            console.log(listItens);
 }
    alert("Programa encerrado")