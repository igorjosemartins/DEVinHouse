
const verificaPalindromo = (text) => {

  var bool = false

  // text -> array
  var splitText = text.split("")

  // inverte a string
  var reverseArray = splitText.reverse()

  // array -> text
  var reverseText = reverseArray.join("")

  if(text == reverseText) {
    bool = true
    console.log(bool)
  }
  else {
    console.log(bool)
  }
}