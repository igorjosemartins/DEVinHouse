
const procuraMinMax = (array) => {

  let text = "Não é possível encontrar"
  let menor = 999999
  let maior = 0

  if (Array.isArray(array) == false || array.length == 0) {
    return console.log(text)
  }
  
  if(array.every(element => typeof element != "number")) {
    return console.log(text)
  }

  array.forEach(element => {
    if(Number(element) > maior) maior = element;
    if(Number(element) < menor) menor = element;
  });
  
  console.log(`Maior valor: ${maior} | Menor valor: ${menor}`)
}