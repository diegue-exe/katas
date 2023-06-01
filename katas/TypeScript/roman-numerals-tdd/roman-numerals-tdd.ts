/* https://www.codurance.com/es/katalyst/numeros-romanos */

import { NUMERAL_TO_ROMAN } from "./consts";

export const romanNumeralConverter = (numberToConvert: number) => {
  let remainingToConvert = numberToConvert;
  let romanNumber = "";

  NUMERAL_TO_ROMAN.forEach(({ numeral, roman }) => {
    const isStillSubstractable = remainingToConvert >= numeral;

    while (isStillSubstractable) {
      romanNumber += roman;
      remainingToConvert -= numeral;
    }
  });
  return romanNumber;
};
