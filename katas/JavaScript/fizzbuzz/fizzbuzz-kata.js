/* Escribir un programa que muestre en pantalla los números del 1 al 100,
 sustituyendo los múltiplos de 3 por la palabra “fizz”, los múltiplos de 5 por “buzz”
  y los múltiplos de ambos, es decir, los múltiplos de 3 y 5 (o de 15), por la palabra “fizzBuzz”. */

function fizzBuzz(amount) {
  for (let currentNumber = 1; currentNumber <= amount; currentNumber++) {
    const isMultipleOfThree = currentNumber % 3 === 0;
    const isMultipleOfFive = currentNumber % 5 === 0;

    if (isMultipleOfThree && isMultipleOfFive) {
      console.log("fizzBuzz");
      continue;
    }
    if (isMultipleOfThree) {
      console.log("fizz");
      continue;
    }
    if (isMultipleOfFive) {
      console.log("buzz");
      continue;
    }
    console.log(currentNumber);
  }
}

fizzBuzz(100);
