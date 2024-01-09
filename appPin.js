let pinCorreto;

function iniciarSistema() {
    const pinForm = document.getElementById('pinForm');
    const startButton = document.getElementById('startButton');
    const fecharButton = document.getElementById('fecharButton');

    if (!pinCorreto) {
        pinCorreto = gerarPIN();
    }

    mostrarMensagem("");
    document.getElementById('pinForm').reset();
    pinForm.style.display = 'block';
    startButton.style.display = 'none';
    fecharButton.style.display = 'block';
}

function fecharForm() {
    const pinForm = document.getElementById('pinForm');
    const startButton = document.getElementById('startButton');
    const fecharButton = document.getElementById('fecharButton');

    pinForm.style.display = 'none';
    startButton.style.display = 'block';
    fecharButton.style.display = 'none';
    resetarForm();
}

function toggleForm() {
    const pinForm = document.getElementById('pinForm');
    const startButton = document.getElementById('startButton');
    const fecharButton = document.getElementById('fecharButton');

    if (pinForm.style.display === 'none') {
        pinCorreto = gerarPIN();
        mostrarMensagem("");
        document.getElementById('pinForm').reset();
        pinForm.style.display = 'block';
        startButton.style.display = 'none';
        fecharButton.style.display = 'block';
    } else {
        pinForm.style.display = 'none';
        startButton.style.display = 'block';
        fecharButton.style.display = 'none';
    }
}

function verificarPIN() {
    const pinInput = document.getElementById('pinInput');
    const successMessage = document.getElementById('successMessage');
    const outputElement = document.getElementById('output');

    // Validação: Apenas números com exatamente 4 dígitos são aceitos
    const pinValue = pinInput.value.trim();

    if (!/^\d{4}$/.test(pinValue) || isNaN(pinValue)) {
        mostrarMensagem("Por favor, digite um número de 4 dígitos.");
        return;
    }

    const pinValueInt = parseInt(pinValue);

    if (pinValueInt === pinCorreto) {
        successMessage.style.display = 'block';
        mostrarMensagem('');
    } else {
        let dica = pinValueInt > pinCorreto ? "menor" : "maior";

        if (Math.abs(pinValueInt - pinCorreto) > 100) {
            dica = "muito " + dica;
        }

        mostrarMensagem(`Tente novamente. O próximo valor deve ser ${dica} que ${pinValueInt}.`);
    }
}


function resetarForm() {
    const successMessage = document.getElementById('successMessage');

    document.getElementById('pinForm').reset();
    successMessage.style.display = 'none';
    mostrarMensagem('');
}

function limparFormulario() {
    document.getElementById('pinForm').reset();
}

function mostrarMensagem(mensagem) {
    const outputElement = document.getElementById('output');
    outputElement.textContent = mensagem;
    outputElement.style.display = 'block';
}

function mostrarDica(mensagem) {
    const dicaMessage = document.getElementById('dicaMessage');
    dicaMessage.textContent = mensagem;
    dicaMessage.style.display = 'block';
}

function gerarPIN() {
    return Math.floor(Math.random() * 9000) + 1000;
}


document.getElementById('pinForm').addEventListener('submit', function (event) {
    event.preventDefault();
    verificarPIN();
});
