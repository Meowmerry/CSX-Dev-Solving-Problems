
/**
 * returns every sequence of throws a single player could throw over an n-round game of rock-paper-scissors
 * rockPaperScissors(1); -> [['rock'],['paper'],['scissors']]
 * rockPaperScissors(2); ->
 * [['rock','rock'],['rock','paper'],['rock','scissors'],
 * ['paper','paper'],['paper','scissors'],['paper','rock'],
 * ['scissors','scissors'],['scissors','paper'],['scissors','rock']]
 */
function rockPaperScissors(num, ans = [], buffer = []) {
    if (buffer.length == num) {
      ans.push(buffer);
    } else {
      rockPaperScissors(num, ans, [...buffer, "rock"]);
      rockPaperScissors(num, ans, [...buffer, "paper"]);
      rockPaperScissors(num, ans, [...buffer, "scissor"]);
    }
    return ans;
  }