/* JavaScript Pag.Inscrição Telefone*/
function validarNumero(input, tipo) {
    let telefone = input.value;
    let regex = /^\d+$/;
    
	let caracteresInvalidos = [];
    for (let char of telefone) {
        if (!regex.test(char)) {
            caracteresInvalidos.push(char);
        }
    }
    if (caracteresInvalidos.length > 0) {
        alert("Erro: O número deve conter apenas dígitos! Caracter \"" + caracteresInvalidos.join(", ") + "\" inválido");
        input.value = "";
        return false;
    }
    if (tipo === 'fixo' && telefone.length > 8) {
        alert("Erro: Um telefone fixo deve conter exatamente 8 dígitos.");
        input.value = "";
        return false;
    }
    if (tipo === 'celular' && telefone.length > 9) {
        alert("Erro: Um celular deve conter exatamente 9 dígitos.");
        input.value = "";
        return false;
    }
    return true;
}
/* JavaScript Pag.Inscrição Matrícula*/
       function calcularValor() {
            var atividadeSelect = document.getElementById('atividade');
            var planoSelect = document.getElementById('plano');
			
            var matriculadoCheckbox = document.getElementById('mat');
            var matriculaInput = document.getElementById('matNum');
			
            var totalInput = document.getElementById('TxtTotal');
			
            var valores = 
			{
                 Academia: { "Anual": 180.00 * 12, "Semestral": 220.00 * 6, "Mensal": 260.00 * 1},
                 Natação: { "Anual": 300.00 * 12, "Semestral": 340.00 * 6, "Mensal": 380.00 * 1},
                 Combo: { "Anual": 330.00 * 12, "Semestral": 390.00 * 6, "Mensal": 440.00 * 1},
            };
			
            var atividade = atividadeSelect.value;
            var plano = planoSelect.value;
			
            if (plano === "-----") {
                 alert("É necessário selecionar um plano!");
                 return;
            }
            if (atividade === "-----") {
                 alert("É necessário selecionar uma atividade!");
                 return;
            }
            let valor = valores[atividade][plano];
            let total = valor;

            if (!matriculadoCheckbox.checked || matriculaInput.value.trim() === "") {
             total += 80.00;
			} 
 		   	totalInput.value = total.toFixed(2);
}
