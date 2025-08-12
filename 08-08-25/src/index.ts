ReadableStreamBYOBReader

let controlador = true;

while (controlador) {
    console.log("=== MENU PRINCIPAL ===");
    console.log("1 - Olá");
    console.log("2 - Sobre");
    console.log("3 - Sair");
    const opcao = readline.question("Escolha uma opção: ");
    switch (opcao) {
        case "1":
            console.log("Olá, seja bem-vindo!");
            break;
        case "2":
            console.log("Este é um exemplo de menu com switch.");
            break;
        case "3":
            console.log("Saindo do programa...");
            controlador = false;
            break;
        default:
            console.log("Opção inválida, por favor tente novamente.");
    }
}