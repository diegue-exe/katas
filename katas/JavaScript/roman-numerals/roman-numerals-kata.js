/* https://www.codurance.com/katalyst/roman-numerals */

const NUMERAL_TO_ROMAN = { "M":1000, "CM":900, "D":500, "CD":400, "C":100, "XC":90, "L":50, "XL":40, "X":10, "IX":9, "V":5, "IV":4, "I":1 };
let romanConversion = "";

function convertIntoRoman(number) {
  for (let [ romanNumber, substrahend ] of Object.entries(NUMERAL_TO_ROMAN)) {
    const isTheHighestSubstrahend = (number >= substrahend);
    const baseCase = (number === 0);

    if (baseCase) {
      return romanConversion;
    }
    if (isTheHighestSubstrahend) {
      romanConversion += romanNumber;
      return convertIntoRoman(number - substrahend);
    };
  }
}

console.log(convertIntoRoman(1644));