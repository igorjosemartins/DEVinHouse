// Utilizando estrutura de repetição, some os números digitados através do prompt 
// enquanto o número for diferente de -1, quando digitado -1 pare de exibir o prompt
// e exiba através de um alert o resultado da soma dos números digitados.

var number = 0

var result = 0

while(number != -1) {
  
  number = prompt("Digite um número para ser somado:")

  if (number == -1) {
    alert(`O resultado das somas é: ${result}`)
  }
  
  result += Number(number)
}


