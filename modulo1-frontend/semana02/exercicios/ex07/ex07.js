// Percorra os números de 0 a 1000 e exiba no console os números primos 
// e ao final a quantidade de números primos que existem nesse intervalo.

var numDivisor = 0

var countPrimo = 0

// percorre de 0 a 1000
for(number = 0; number <= 1000; number++) {

  // percorre de 0 ao número para podermos dividi-lo por todos os outros números antes dele
  for (divisor = 0; divisor <= number; divisor++) {
    
    // se o resto da divisão do número pelo divisor for igual a 0
    if (number % divisor == 0) {
      // então o divisor é divisível pelo número, portanto aumentamos em 1 o número de divisores
      numDivisor++
    }
  }

  // se o número de divisores for igual a 2, então o número é primo, já que será por 1 e por ele mesmo
  if (numDivisor == 2) {
    // mostro o número primo
    console.log(number)
    // contador de números primos
    countPrimo++
  }

  // resetar o número de divisores pro próximo número
  numDivisor = 0
}

console.log(`Existem ${countPrimo} números primos no intervalo de 0 a 1000`)