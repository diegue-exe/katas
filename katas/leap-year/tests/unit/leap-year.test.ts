import { checkLeapYear } from "../../leap-year";

describe("check if the year introduced is a leap year", () => {
  describe("check if the year is divisible by 4", () => {
    test("if year is divisible by 4 is a leap year", () => {
      expect(checkLeapYear(2024)).toBe(true);
    });

    test("if year is divisible by 4 is a leap year", () => {
      expect(checkLeapYear(2028)).toBe(true);
    });

    test("if year is divisible by 4 is a leap year", () => {
      expect(checkLeapYear(2032)).toBe(true);
    });

    test("if year is NOT divisible by 4 is NOT a leap year", () => {
      expect(checkLeapYear(2023)).toBe(false);
    });

    test("if year is NOT divisible by 4 is NOT a leap year", () => {
      expect(checkLeapYear(2025)).toBe(false);
    });

    test("if year is NOT divisible by 4 is NOT a leap year", () => {
      expect(checkLeapYear(2027)).toBe(false);
    });
  });
  describe("check if the year is divisible by 400", () => {
    test("if year is divisible by 400 is a leap year", () => {
      expect(checkLeapYear(1600)).toBe(true);
    });
    test("if year is divisible by 400 is a leap year", () => {
      expect(checkLeapYear(2000)).toBe(true);
    });
    test("if year is divisible by 400 is a leap year", () => {
      expect(checkLeapYear(2400)).toBe(true);
    });
  });
  describe("check if the year is divisible by 100 but not by 400", () => {
    test("if year is divisible by 100 but not by 400 is NOT a leap year", () => {
      expect(checkLeapYear(1800)).toBe(false);
    });
    test("if year is divisible by 100 but not by 400 is NOT a leap year", () => {
      expect(checkLeapYear(1300)).toBe(false);
    });
    test("if year is divisible by 100 but not by 400 is NOT a leap year", () => {
      expect(checkLeapYear(900)).toBe(false);
    });
  });
});
