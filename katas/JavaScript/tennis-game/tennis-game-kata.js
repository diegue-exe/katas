/*
This kata was created by Emily Bache. You can check the original version: https://github.com/emilybache/Tennis-Refactoring-Kata

Tennis has a rather quirky scoring system, and to newcomers it can be a little difficult to keep track of.
The tennis society has contracted you to build a scoreboard to display the current score during tennis games.

You can read more about Tennis scores on wikipedia which is summarized below:
  1. A game is won by the first player to have won at least four points in total and at least two points more than the opponent.
  2. The running score of each game is described in a manner peculiar to tennis: scores from zero to three points are described as “Love”, “Fifteen”, “Thirty”, and “Forty” respectively.
  3. If at least three points have been scored by each player, and the scores are equal, the score is “Deuce”.
  4. If at least three points have been scored by each side and a player has one more point than his opponent, the score of the game is “Advantage” for the player in the lead.
You need only report the score for the current game. Sets and Matches are out of scope.
*/

const DIFFERENCE_TO_WIN = 2;
const MIN_POINTS_TO_WIN = 4;
const GAME_SCORES = [
  {
    name: "Paco",
    score: 0
  },
  {
    name: "Pepe",
    score: 0
  }
];

const DRAW_SCORES = { 0: "Love-All", 1: "Fifteen-All", 2: "Thirty-All", 3: "Deuce" }
const SCORES = { 0: "Love", 1: "Fifteen", 2: "Thirty", 3: "Forty" }

function scored(name) {
  const currentPlayer = GAME_SCORES.find(player => player.name === name);
  currentPlayer.score += 1;

  return hasPlayerWon(currentPlayer) ? displayWinner(currentPlayer): displayScore();
}

function hasPlayerWon(player) {
  const index = GAME_SCORES.indexOf(player);
  const otherPlayerIndex = index === 0 ? index + 1 : index - 1;

  return (player.score >= (GAME_SCORES[otherPlayerIndex].score + DIFFERENCE_TO_WIN)) && player.score === MIN_POINTS_TO_WIN;
}

function displayWinner(player) {
  return `Player ${player.name} has won the game`;
}

function displayScore() {
  const hasDrawn = GAME_SCORES[0].score === GAME_SCORES[1].score;
  if (hasDrawn) return DRAW_SCORES[GAME_SCORES[0].score];

  const hasAdvantage = GAME_SCORES[0].score >= MIN_POINTS_TO_WIN || GAME_SCORES[1].score >= MIN_POINTS_TO_WIN;
  if (hasAdvantage) {
    const minus = GAME_SCORES[0].score - GAME_SCORES[1].score;
    return minus === 1 ? 'Advantage-Forty': 'Forty-Advantage';
  }

  const scorePlayer1 = SCORES[GAME_SCORES[0].score];
  const scorePlayer2 = SCORES[GAME_SCORES[1].score];

  return `${scorePlayer1}-${scorePlayer2}`;
}

