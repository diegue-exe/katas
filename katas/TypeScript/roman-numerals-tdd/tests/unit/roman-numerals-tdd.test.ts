import { romanNumeralConverter } from "../../roman-numerals-tdd";

describe("checks the default conversion cases", () => {
  test("if a number is given must return its roman equivalent", () => {
    const number = 1;
    expect(romanNumeralConverter(number)).toBe("I");
  });
  test("if a number is given must return its roman equivalent", () => {
    const number = 5;
    expect(romanNumeralConverter(number)).toBe("V");
  });
  test("if a number is given must return its roman equivalent", () => {
    const number = 1000;
    expect(romanNumeralConverter(number)).toBe("M");
  });
});

describe("checks the addition conversion cases", () => {
  test("if a number is given must add until returning its roman equivalent", () => {
    const number = 2;
    expect(romanNumeralConverter(number)).toBe("II");
  });
  test("if a number is given must add until returning its roman equivalent", () => {
    const number = 3;
    expect(romanNumeralConverter(number)).toBe("III");
  });
  test("if a number is given must add until returning its roman equivalent", () => {
    const number = 20;
    expect(romanNumeralConverter(number)).toBe("XX");
  });
});

describe("checks the edge conversion cases", () => {
  test("if a number is given must add until returning its roman equivalent", () => {
    const number = 4;
    expect(romanNumeralConverter(number)).toBe("IV");
  });
  test("if a number is given must add until returning its roman equivalent", () => {
    const number = 9;
    expect(romanNumeralConverter(number)).toBe("IX");
  });
  test("if a number is given must add until returning its roman equivalent", () => {
    const number = 19;
    expect(romanNumeralConverter(number)).toBe("XIX");
  });
});
