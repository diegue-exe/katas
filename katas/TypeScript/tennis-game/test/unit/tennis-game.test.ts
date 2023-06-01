import { displayScore } from "../../tennis-game";
describe("checks if displays score correctly", () => {
  test("if given a numeric score displays the current score", () => {
    expect(displayScore("0-1")).toBe("Love-Fifteen");
    expect(displayScore("0-2")).toBe("Love-Thirty");
    expect(displayScore("1-3")).toBe("Fifteen-Forty");
  });

  test("if given a numeric draw score displays the correct nomenclature", () => {
    expect(displayScore("0-0")).toBe("Love-All");
    expect(displayScore("1-1")).toBe("Fifteen-All");
    expect(displayScore("2-2")).toBe("Thirty-All");
    expect(displayScore("3-3")).toBe("Deuce");
  });

  test("if given an advantage situation displays the advantage correctly", () => {
    expect(displayScore("3-4")).toBe("Forty-Advantage");
    expect(displayScore("4-3")).toBe("Advantage-Forty");
  });
});
