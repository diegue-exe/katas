import { displayScore } from "../../tennis-game";
describe("checks if displays score correctly", () => {
  test("if given a numeric score displays the current score", () => {
    expect(displayScore("0-1")).toBe("Love-Fifteen");
    expect(displayScore("0-2")).toBe("Love-Thirty");
    expect(displayScore("1-3")).toBe("Fifteen-Forty");
  });
});
