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
    parseInt(playerOneScore) === MIN_POINTS_TO_WIN ||
    parseInt(playerTwoScore) === MIN_POINTS_TO_WIN;
  const hasEnoughDifference =
    parseInt(playerOneScore) >= parseInt(playerTwoScore) + DIFFERENCE_TO_WIN ||
    parseInt(playerTwoScore) >= parseInt(playerOneScore) + DIFFERENCE_TO_WIN;
  const hasEnoughPointsToWin =
    parseInt(playerOneScore) >= MIN_POINTS_TO_WIN ||
    parseInt(playerTwoScore) >= MIN_POINTS_TO_WIN;
  const hasGameEnded = hasEnoughDifference && hasEnoughPointsToWin;

  if (hasGameEnded) {
    return parseInt(playerOneScore) > parseInt(playerTwoScore)
      ? "Player 1 has won"
      : "Player 2 has won";
  }
  if (isDeuce) return "Deuce";
  if (isDraw) return `${NUMERIC_CONVERSION[playerOneScore]}-All`;
  if (isAdvantage) {
    return parseInt(playerOneScore) === MIN_POINTS_TO_WIN
      ? "Advantage-Forty"
      : "Forty-Advantage";
  }

  return (
    NUMERIC_CONVERSION[playerOneScore] +
    "-" +
    NUMERIC_CONVERSION[playerTwoScore]
  );
};
