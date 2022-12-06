// Exiba um prompt solicitando a entrada de um número para saber quantos pares e 
// impares existem de 0 até o número digitado.

// Calcule o número de pares e impares e exiba o resultado utilizando um alert.

var number = prompt("Digite um número para saber quantos pares e impares existem até ele:")

var countPar = 0

var countImpar = 0

for(i=0; i <= number; i++) {
  
  if(i % 2 == 0) {
    countPar++
  } else {
    countImpar++
  }
}

alert(`Existem ${countPar} números pares e ${countImpar} números ímpares até o ${number}`)
