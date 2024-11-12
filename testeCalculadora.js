const ask = require('readline-sync')

let sustentaMenu = true

while (sustentaMenu) {
    console.clear()

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
    
    let opcaoUsuario = Number(ask.question("Digite uma opcao: "))

    switch (opcaoUsuario) {
        case 1:
            console.clear()  
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

            let num1 = Number(ask.question("Digite o primeiro numero: "))
            let num2 = Number(ask.question("Digite o segundo numero: "))

            switch (opcaoCalculo) {
                case 1:
                    console.log(somar(num1, num2))
                    break
                case 2:
                    console.log(subtrair(num1, num2))
                    break
                case 3:
                    console.log(multiplicacao(num1, num2))
                    break
                case 4:
                    console.log(divisao(num1, num2))
                    break
                case 5:
                    console.log(mod(num1, num2))
                    break
                default:
                    console.log(`Opcao invalida, tente novamente`)
                    break
            }
            break
        case 0:
            sustentaMenu = false
            break
        default:
            console.log(`Opcao invalida, tente novamente`)
            break
    }
    
ask.question("Tecle enter para continuar...")
}


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
