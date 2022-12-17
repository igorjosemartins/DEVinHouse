
// const verificaPalindromo = (text) => {

//   var bool = false

//   // text -> array
//   var splitText = text.split("")

//   // inverte a string
//   var reverseArray = splitText.reverse()

//   // array -> text
//   var reverseText = reverseArray.join("")

//   if(text == reverseText) {
//     bool = true
//     console.log(bool)
//   }
//   else {
//     console.log(bool)
//   }
// }

const pal = (txt) => {
  
  let bool = false

  if(typeof txt == "string") {
    
    let reverse = txt.split("").reverse().join("")

    if (txt == reverse) {
      bool = true
    }

    return bool
  }
  else {
    return "A função só aceita strings como parâmetro"
  } 
}