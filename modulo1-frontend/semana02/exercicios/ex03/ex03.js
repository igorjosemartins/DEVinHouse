// Utilizando estrutura de repetição realize a tabuada do número x e exiba ela da seguinte forma:
// 2 x 0 = 0
// 2 x 1 = 2
// ....
// 2 x 10 = 20

// O número para realizar a tabuada deve ser solicitado via prompt e o resultado apresentado via alert.

var number = prompt("Digite um número:") 

for(i=0; i < 11; i++) {
  
  let result = number * i
  alert(`${number} x ${i} = ${result}`)
}