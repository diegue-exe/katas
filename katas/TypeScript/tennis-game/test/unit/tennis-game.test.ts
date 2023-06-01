import { displayScore } from "../../tennis-game";
describe("checks if displays score correctly", () => {
  test("if given a numeric score displays the current score", () => {
    expect(displayScore("0-1")).toBe("0-15");
    expect(displayScore("0-2")).toBe("0-30");
    expect(displayScore("1-3")).toBe("15-40");
  });
});
