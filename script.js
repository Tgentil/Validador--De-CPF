function aplicarMascaraCPF() {
	// Obtém o elemento HTML do campo de entrada "cpfInput".
	var cpfInput = document.getElementById("cpfInput");
	// Remove todos os caracteres não numéricos do valor atual do campo de entrada "cpfInput".
	var cpf = cpfInput.value.replace(/\D/g, "");
	// Define a máscara inicial do CPF como "___.___.___-__".
	var formattedCPF = "___.___.___-__";
	// Substitui cada caractere não numérico na máscara com o próximo caractere numérico do CPF.
	for (var i = 0; i < cpf.length && i < formattedCPF.length; i++) {
		formattedCPF = formattedCPF.replace("_", cpf.charAt(i));
	}
	// Define o valor do campo de entrada "cpfInput" como a nova máscara do CPF.
	cpfInput.value = formattedCPF;
}

// Obtém o elemento HTML do campo de entrada "cpfInput".
var cpfInput = document.getElementById("cpfInput");
// Adiciona um ouvinte de evento de entrada ao campo de entrada "cpfInput" que chama a função "aplicarMascaraCPF" toda vez que o valor do campo é alterado.
cpfInput.addEventListener("input", aplicarMascaraCPF);

// Adiciona um ouvinte de evento de teclado ao campo de entrada "cpfInput" que impede que o usuário insira qualquer caractere que não seja um número, Backspace, Delete, ArrowLeft, ArrowRight ou Tab.
cpfInput.addEventListener("keydown", function (event) {
	if (
		event.key !== "Backspace" &&
		event.key !== "Delete" &&
		event.key !== "ArrowLeft" &&
		event.key !== "ArrowRight" &&
		event.key !== "Tab" &&
		!isNumeric(event.key)
	) {
		event.preventDefault();
	}
});

// Define a função que verifica se um determinado caractere é numérico
function isNumeric(key) {
	return /\d/.test(key);
}

// Obtém o elemento de input do CPF
var cpfInput = document.getElementById("cpfInput");

// Adiciona um listener para o evento "input", que é acionado quando o valor do input muda
cpfInput.addEventListener("input", aplicarMascaraCPF);

// Adiciona um listener para o evento "keydown", que é acionado quando uma tecla é pressionada
cpfInput.addEventListener("keydown", function (event) {
	// Verifica se o valor atual do input já tem 11 caracteres e a tecla pressionada não é uma das permitidas
	if (
		cpfInput.value.length >= 11 &&
		event.key !== "Backspace" &&
		isNaN(parseInt(event.key))
	) {
		event.preventDefault(); // impede que a tecla pressionada tenha efeito no input
	}
});

// Define a função que valida o CPF
function validarCPF() {
	// Obtém o elemento do input de CPF e o elemento de validação
	var cpfInput = document.getElementById("cpfInput");
	var cpfValidation = document.getElementById("cpfValidation");

	// Remove todos os caracteres não numéricos do CPF
	var cpf = cpfInput.value;
	cpf = cpf.replace(/\D/g, "");

	// Verifica se o CPF possui 11 dígitos e não é uma sequência de números repetidos
	if (
		cpf.length !== 11 ||
		cpf === "00000000000" ||
		cpf === "11111111111" ||
		cpf === "22222222222" ||
		cpf === "33333333333" ||
		cpf === "44444444444" ||
		cpf === "55555555555" ||
		cpf === "66666666666" ||
		cpf === "77777777777" ||
		cpf === "88888888888" ||
		cpf === "99999999999"
	) {
		cpfValidation.innerHTML = "CPF inválido";
		cpfValidation.style.color = "red";
		return false;
	}

	// Realiza o cálculo do primeiro dígito verificadores do CPF
	var soma = 0;
	var resto;
	for (var i = 1; i <= 9; i++) {
		soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
	}
	// Se o resto for 10 ou 11, o dígito verificador deve ser 0
	resto = (soma * 10) % 11;
	if (resto === 10 || resto === 11) {
		resto = 0;
	}
	// Se o resto não for igual ao 9º dígito verificador do CPF, retorna false
	if (resto !== parseInt(cpf.substring(9, 10))) {
		cpfValidation.innerHTML = "CPF inválido";
		cpfValidation.style.color = "red";
		return false;
	}
	// Realiza o cálculo do segundo dígito verificadores do CPF
	soma = 0;
	for (i = 1; i <= 10; i++) {
		soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
	}
	// Se o resto for 10 ou 11, o dígito verificador deve ser 0
	resto = (soma * 10) % 11;
	if (resto === 10 || resto === 11) {
		resto = 0;
	}
	// Se o resto não for igual ao 10º dígito verificador do CPF, exibe mensagem de erro e retorna false
	if (resto !== parseInt(cpf.substring(10, 11))) {
		cpfValidation.innerHTML = "CPF inválido";
		cpfValidation.style.color = "red";
		return false;
	}

	// Exibe a mensagem de CPF válido e retorna true
	cpfValidation.innerHTML = "CPF válido";
	cpfValidation.style.color = "green";
	return true;
}

// Obtém o elemento de entrada do CPF pelo ID "cpfInput"
var cpfInput = document.getElementById("cpfInput");

// Define uma função "toggleMode" para alternar entre os modos claro e escuro
function toggleMode() {
	// Obtém o elemento body do documento
	var element = document.body;
	// Alterna as classes "dark-mode" e "light-mode" do elemento body
	element.classList.toggle("dark-mode");
	element.classList.toggle("light-mode");

	// Obtém o botão para alternar o modo pelo ID "modeButton"
	var button = document.getElementById("modeButton");

	// Atualiza o texto do botão com base no modo atual
	if (element.classList.contains("dark-mode")) {
		button.textContent = "Alterar para Light Mode";
	} else {
		button.textContent = "Alterar para Dark Mode";
	}
}
