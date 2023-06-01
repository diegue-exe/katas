/* https://github.com/540/tennis-refactoring-kata-typescript-test-commit-revert/blob/main/README.md */

export const displayScore = (score: string) => {
  if (score === "0-1") return "0-15";
  if (score === "0-2") return "0-30";
  if (score === "1-3") return "15-40";
};
