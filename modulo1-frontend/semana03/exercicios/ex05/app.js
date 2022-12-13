
const sum = ( ...num) => {
 
  let result = 0

  for(let number of num) {
    result += number;
  }
  
  return result
}
