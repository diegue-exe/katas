/*
Every month, a random number of students take the driving test at Fast & Furious (F&F) Driving School.
To pass the test, a student cannot accumulate more than 18 demerit points.

At the end of the month, F&F wants to calculate the average demerit points accumulated by ONLY
the students who have passed, rounded to the nearest integer.

Write a function which would allow them to do so.
If no students passed the test that month, return 'No pass scores registered.'.

Example:
[10,10,10,18,20,20] --> 12
*/

const MAX_DEMERIT_TO_PASS = 18;

function checkScores(students) { 
  let amountOfExamsPassed = 0;
  let totalScore = 0;

  for(let score of students) {
    if (score <= MAX_DEMERIT_TO_PASS) {
      totalScore += score;
      amountOfExamsPassed++;
    }
  }
  if (amountOfExamsPassed > 0) {
    return averageScore(totalScore, amountOfExamsPassed);
  }
  return "No pass scores registered.";
} 

function averageScore(totalScore, amountOfExamsPassed) {
  return Math.round(totalScore / amountOfExamsPassed);
}

console.log(checkScores([10,10,10,18,20,20]));