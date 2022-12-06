// Faça 3 prompts ao usuário:
// 1. no primeiro, pergunte qual o tipo de cálculo ele deseja fazer (“+”, “-”, “*” ou “/”);
// 2. no segundo, pergunte o primeiro valor que deseja calcular;
// 3. no terceiro, o segundo valor que deseja calcular.

// Em seguida, realize o cálculo e exiba na tela um “alert” contendo o texto “O resultado do seu cálculo é: X”, onde X é o resultado final do cálculo solicitado pelo usuário.

var choice = prompt("Escolha um tipo de cálculo: +, -, * ou /")

var firstValue = prompt("Digite o primeiro valor que deseja calcular:")

var secondValue = prompt("Digite o segundo valor que deseja calcular:")

var result = 0

switch (choice) {
  case "+":
    result = Number(firstValue) + Number(secondValue)

    alert(`O resultado do seu cálculo é: ${result}`)
    
    break;

  case "-":
    result = Number(firstValue) - Number(secondValue)

    alert(`O resultado do seu cálculo é: ${result}`)

    break;

  case "*":
    result = Number(firstValue) * Number(secondValue)

    alert(`O resultado do seu cálculo é: ${result}`)

    break;

  case "/":
    result = Number(firstValue) / Number(secondValue)

    alert(`O resultado do seu cálculo é: ${result}`)

    break;
}