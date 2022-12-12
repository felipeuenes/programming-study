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


let item = window.prompt(`Digite a opção desejada:
================
1 - Cadastrar item
2 - Remover item cadastrado
3 - Ver itens cadastrados
4 - Sair do programa`)

console.log(item);

let banco = [];

switch (item) {
    case "1":
        let itemCadas = prompt("Digite o item para cadastrar")
        
        banco.push(itemCadas);

        alert(`Item ${itemCadas} cadastrado!`)
        let cadastroOutro = prompt("Deseja cadastrar outro? (responda sim ou não)")

        if (cadastroOutro == "sim") {
            
        } else {
            
        }
        break;
    case "1":
        
        break;
    case "2":
        
        break;
    case "3":
        
        break;
    case "4":
        
        break;

    default:
        break;
}

console.log(banco);




