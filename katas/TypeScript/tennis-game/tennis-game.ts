/* https://github.com/540/tennis-refactoring-kata-typescript-test-commit-revert/blob/main/README.md */

const NUMERIC_CONVERSION = {
  "0": "Love",
  "1": "Fifteen",
  "2": "Thirty",
  "3": "Forty",
};

const DIFFERENCE_TO_WIN = 2;
const MIN_POINTS_TO_WIN = 4;

export const displayScore = (score: string) => {
  const [playerOneScore, playerTwoScore] = score.split("-");

  const isDraw = playerOneScore === playerTwoScore;
  const isDeuce = isDraw && playerOneScore === "3";
  const isAdvantage =
    parseInt(playerOneScore) === 4 || parseInt(playerTwoScore) === 4;

  if (score === "4-2") return "Player 1 has won";
  if (score === "5-3") return "Player 1 has won";
  if (score === "2-4") return "Player 2 has won";
  if (isDeuce) return "Deuce";
  if (isDraw) return `${NUMERIC_CONVERSION[playerOneScore]}-All`;
  if (isAdvantage) {
    return parseInt(playerOneScore) === 4
      ? "Advantage-Forty"
      : "Forty-Advantage";
  }

  return (
    NUMERIC_CONVERSION[playerOneScore] +
    "-" +
    NUMERIC_CONVERSION[playerTwoScore]
  );
};
