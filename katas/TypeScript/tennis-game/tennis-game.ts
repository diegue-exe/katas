/* https://github.com/540/tennis-refactoring-kata-typescript-test-commit-revert/blob/main/README.md */

const NUMERIC_CONVERSION = {
  "0": "Love",
  "1": "Fifteen",
  "2": "Thirty",
  "3": "Forty",
};

export const displayScore = (score: string) => {
  const [playerOneScore, playerTwoScore] = score.split("-");
  const isDraw = playerOneScore === playerTwoScore;
  const isDeuce = isDraw && playerOneScore === "3";

  if (isDeuce) return "Deuce";
  if (isDraw) return `${NUMERIC_CONVERSION[playerOneScore]}-All`;

  return (
    NUMERIC_CONVERSION[playerOneScore] +
    "-" +
    NUMERIC_CONVERSION[playerTwoScore]
  );
};
