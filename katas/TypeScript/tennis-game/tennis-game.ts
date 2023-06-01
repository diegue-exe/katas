/* https://github.com/540/tennis-refactoring-kata-typescript-test-commit-revert/blob/main/README.md */

const NUMERIC_CONVERSION = {
  "0": "Love",
  "1": "Fifteen",
  "2": "Thirty",
  "3": "Forty",
};

export const displayScore = (score: string) => {
  const [playerOneScore, playerTwoScore] = score.split("-");
  const convertedScore =
    NUMERIC_CONVERSION[playerOneScore] +
    "-" +
    NUMERIC_CONVERSION[playerTwoScore];

  if (score === "0-0") return "Love-All";
  if (score === "1-1") return "Fifteen-All";
  if (score === "2-2") return "Thirty-All";

  return convertedScore;
};
