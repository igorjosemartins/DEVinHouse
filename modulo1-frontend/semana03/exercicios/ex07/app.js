
const destructObj = (obj) => {

  var {nome} = obj
  var {idade} = obj
  var {profissao} = obj
  
  return `Esta é ${nome}, tem ${idade} anos e é ${profissao}`
}