const ask = require('readline-sync') 

let sustentaMenu = true // variável que controla o loop principal do menu e  enquanto for 'true', o menu continuará sendo exibido.

while (sustentaMenu) { // laço que mantém o menu principal funcionando
    console.clear()  // limpa a tela

   
    console.log(`       
     ██████╗ █████╗ ██╗      ██████╗██╗   ██╗██╗      █████╗ ██████╗  ██████╗ ██████╗  █████╗ 
    ██╔════╝██╔══██╗██║     ██╔════╝██║   ██║██║     ██╔══██╗██╔══██╗██╔═══██╗██╔══██╗██╔══██╗
    ██║     ███████║██║     ██║     ██║   ██║██║     ███████║██║  ██║██║   ██║██████╔╝███████║ 
    ██║     ██╔══██║██║     ██║     ██║   ██║██║     ██╔══██║██║  ██║██║   ██║██╔══██╗██╔══██║
    ╚██████╗██║  ██║███████╗╚██████╗╚██████╔╝███████╗██║  ██║██████╔╝╚██████╔╝██║  ██║██║  ██║
     ╚═════╝╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═════╝  ╚
    [1] - Calcular
    [0] - Sair
    `)

    // pede ao usuário uma opção no menu principal
    let opcaoUsuario = Number(ask.question("Digite uma opcao: "))

    switch (opcaoUsuario) {
        case 1: // se o usuário escolher '1', entra no menu de operações
            console.clear()  // limpa a tela mais uma vez para o próximo menu

            
            console.log(`
             ██████╗ █████╗ ██╗      ██████╗██╗   ██╗██╗      █████╗ ██████╗  ██████╗ ██████╗  █████╗ 
            ██╔════╝██╔══██╗██║     ██╔════╝██║   ██║██║     ██╔══██╗██╔══██╗██╔═══██╗██╔══██╗██╔══██╗
            ██║     ███████║██║     ██║     ██║   ██║██║     ███████║██║  ██║██║   ██║██████╔╝███████║
            ██║     ██╔══██║██║     ██║     ██║   ██║██║     ██╔══██║██║  ██║██║   ██║██╔══██╗██╔══██║
            ╚██████╗██║  ██║███████╗╚██████╗╚██████╔╝███████╗██║  ██║██████╔╝╚██████╔╝██║  ██║██║  ██║
             ╚═════╝╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═════╝  ╚
            [1] - Soma
            [2] - Subtracao
            [3] - Multiplicacao
            [4] - Divisao
            [5] - Mod
            `)

            let opcaoCalculo = Number(ask.question("Digite a opcao desejada: "))

            // pede os dois números necessários para a operação
            let num1 = Number(ask.question("Digite o primeiro numero: "))
            let num2 = Number(ask.question("Digite o segundo numero: "))

            // switch para executar a operação escolhida
            switch (opcaoCalculo) {
                case 1:
                    console.log(somar(num1, num2))  // chama a função somar
                    break
                case 2:
                    console.log(subtrair(num1, num2))  // chama a função menos
                    break
                case 3:
                    console.log(multiplicacao(num1, num2))  // chama a função multiplicação
                    break
                case 4:
                    console.log(divisao(num1, num2))  // chama a função divisão
                    break
                case 5:
                    console.log(mod(num1, num2))  // chama a função mod
                    break
                default:
                    console.log(`Opcao invalida, tente novamente`)  
                    break
            }
            break
        case 0: // se o usuário escolher '0', o laço principal é encerrado
            sustentaMenu = false  
            break
        default:
            console.log(`Opcao invalida, tente novamente`)  
    }

    
    ask.question("Tecle enter para continuar...")
}

// funções para cada tipo de conta
function somar(num1, num2) {
    return num1 + num2  
}
function subtrair(num1, num2) {
    return num1 - num2  
}

function divisao(num1, num2) {
    return num1 / num2  
}

function multiplicacao(num1, num2) {
    return num1 * num2  
}

function mod(num1, num2) {
    return num1 % num2  
}
