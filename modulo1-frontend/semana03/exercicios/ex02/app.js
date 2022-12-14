
// ex: 

// const mensagemOla = (name) => {
//   return `Olá ${name}`
// }

// extra:

const button = document.querySelector(".button")

function mensagemOla() {
  
  const input = document.querySelector(".txtarea")

  const name = input.value;

  const result = `Olá ${name}`

  const p = document.querySelector(".p")

  p.innerHTML = result
}

button.addEventListener("click", mensagemOla())