
const concatArray = (array1, array2) => {
  //const novoArray = array1.concat(array2)

  const novoArray = [...array1, ...array2]
  console.log(`Novo array: ${novoArray}`)
}
