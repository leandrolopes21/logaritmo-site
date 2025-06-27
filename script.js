var botaoCalcular = document.getElementById('btCalcular');
var botaoLimpar = document.getElementById('btLimpar');

botaoCalcular.disabled = false;
botaoLimpar.disabled = true;

function calcular() {
    // 1. Pega os valores dos campos de entrada
    const numeroInput = document.getElementById('numero');
    const baseInput = document.getElementById('base');
    const resultadoP = document.getElementById('resultado');

    const numero = parseFloat(numeroInput.value);
    const base = parseFloat(baseInput.value);

    // 2. Validação simples para evitar erros
    if (isNaN(numero) || isNaN(base) || numero <= 0 || base <= 0 || base === 1) {
        resultadoP.textContent = "Erro: Verifique os valores (numero > 0, base > 0 e ≠ de 1).";
        resultadoP.style.color = 'red'; // Cor vermelha para indicar o erro
        return; // Sai da função para continuar o cálculo
    }

    // 3. Aplica a fórmula para mudança de base
    // Math.log() calcula o logaritmo natural (base e)
    const logaritmo = Math.log(numero) / Math.log(base);

    // 4. Exibe o resultado na tela, arredondando para duas casas decimais
    resultadoP.textContent = `O logaritmo de ${numero} na base ${base} é ≈ ${logaritmo.toFixed(4)}`;
    resultadoP.style.color = '#333'; // Volta a cor normal

    botaoCalcular.disabled = true;
    botaoLimpar.disabled = false;
    numeroInput.disabled = true;
    baseInput.disabled = true;
}

function limpar() {
            
    const numeroInput = document.getElementById('numero');
    const baseInput = document.getElementById('base');
    const resultadoP = document.getElementById('resultado');
    numeroInput.value = "";
    baseInput.value = "";
    resultadoP.textContent = "";

    botaoCalcular.disabled = false;
    botaoLimpar.disabled = true;
    numeroInput.disabled = false;
    baseInput.disabled = false;
    numeroInput.focus();
}

        