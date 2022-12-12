
function procuraMinMax(array) {

  var text = "Não é possível encontrar"
  let menor = 999999
  let maior = 0

  if(array == null) {
    return console.log(text)
  }
  else if(array.length == 0) {
    return console.log(text)
  }
  
  array.forEach(element => {
    if(Number(element) > maior) maior = element;
    if(Number(element) < menor) menor = element;
  });
  
  console.log(`Maior valor: ${maior} | Menor valor: ${menor}`)
}