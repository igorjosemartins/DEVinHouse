// Utilizando estrutura condicional exiba a descrição da classificação da idade da pessoa de acordo com os dados abaixo:

// Jovens - Indivíduos de até 15 anos;
// Adultos - Indivíduos com idade entre 16 até 64 anos;
// Idosos - Indivíduos de 65 anos em diante.

// Utilize prompt para solicitar a idade e alert para exibir a classificação.

var opc = prompt("Digite a sua idade:")

if(opc > 0 && opc <= 15) {
  alert("Você é considerado Jovem")
} 
else if(opc > 15 && opc <= 64) {
  alert("Você é considerado Adulto")
} 
else if(opc > 64) {
  alert("Você é considerado Idoso")
} 
else {
  alert("Idade inválida")
}
