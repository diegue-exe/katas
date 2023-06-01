/* https://www.codurance.com/es/katalyst/leap-year */

export const checkLeapYear = (year: number) => {
  const isDivisibleByFour = year % 4 === 0;
  const isDivisibleByFourHundred = year % 400 === 0;
  const isDivisibleByAHundred = year % 100 === 0;

  if (
    (isDivisibleByAHundred && !isDivisibleByFourHundred) ||
    !isDivisibleByFour
  )
    return false;
  if (isDivisibleByFourHundred || isDivisibleByFour) return true;
};
