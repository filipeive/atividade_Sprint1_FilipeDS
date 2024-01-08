// Função para solicitar ao usuário para digitar o PIN
function solicitarPin() {
    return prompt("Por favor, digite um PIN com exatamente 4 dígitos:");
}

//var pinCorreto = 1524; // pin fixo
var pinCorreto = Math.floor(Math.random() * 9000) + 1000; // pin aleatório
console.log("DEBUG: Número PIN correto gerado aleatoriamente:", pinCorreto);
var tentativas = 0; // Contador de Tentativas

// Loop externo para permitir que o usuário tente novamente
while (true) { // Início do loop externo
    var pinUsuario = solicitarPin(); // Chamar a função para solicitar o PIN ao usuário
    console.log("DEBUG: PIN do usuário inserido:", pinUsuario);

    // Verificar se o usuário clicou em "Cancelar" ou deixou em branco
    if (pinUsuario === null) {
        alert("Operação cancelada. Programa encerrado.");
        break; // Sai do loop externo se o usuário cancelar
    }
    // Loop interno para garantir que o PIN seja fornecido corretamente
    while (true) { // Início do loop interno
        if (pinUsuario === null) {
            alert("Operação cancelada. Programa encerrado.");
            break; // Sai do loop interno se o usuário cancelar
        }
        // Verificar se o PIN tem 4 dígitos e é composto apenas por números
        if (pinUsuario.length !== 4 || isNaN(pinUsuario)) {
            alert("O PIN deve ter exatamente 4 dígitos e ser composto apenas por números. Tente novamente.");
            pinUsuario = solicitarPin(); // Solicitar novamente dentro do loop interno
        } else {
            // Converter o PIN do usuário para um número inteiro
            var pinUsuarioNum = parseInt(pinUsuario);

            // Verificar se o PIN está correto
            if (pinUsuarioNum === pinCorreto) {
                alert("Parabéns! Você acertou o PIN: " + pinCorreto + "  em  " + tentativas + " tentativas.");
                break; // Sai do loop interno, pois o PIN foi encontrado
            } else {
                // dicas
                if (pinUsuarioNum < pinCorreto) {
                    if (pinCorreto - pinUsuarioNum > 100) {
                        alert("O PIN deve ser muito maior que: " + pinUsuario + ". Tente novamente.");
                    } else {
                        alert("O PIN deve ser maior que: " + pinUsuario + ". Tente novamente.");
                    }
                } else {
                    if (pinUsuarioNum - pinCorreto > 100) {
                        alert("O PIN deve ser muito menor que: " + pinUsuario + ". Tente novamente.");
                    } else {
                        alert("O PIN deve ser menor que: " + pinUsuario + ". Tente novamente.");
                    }
                }

                tentativas++;
                // Solicitar novamente dentro do loop interno
                pinUsuario = solicitarPin();
            }
        }
    } // Fim do loop interno

    // Verificar se o usuário quer tentar novamente
    var tentarNovamente = confirm("Deseja tentar novamente?");
    console.log("DEBUG: Tentar novamente?", tentarNovamente);

    if (!tentarNovamente) {
        alert("Programa encerrado. Obrigado!");
        break; // Sai do loop externo se o usuário não quiser tentar novamente
    }
} // Fim do loop externo
