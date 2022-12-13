
var uneDobraRetorna = (arrayNum, ...num) => {

  for(let number of num) {
    let num = number * 2
    arrayNum.push(num)
  }

  return arrayNum
}