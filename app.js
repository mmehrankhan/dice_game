
 const secretNumber = Math.floor(Math.random() * 6) + 1;
 let chances = 2;
 let score = 0;

 function checkGuess() {
     const guess = parseInt(document.getElementById('guessInput').value);
     if (guess === secretNumber) {
         if (chances === 2) {
             score += 6;
         } else {
             score += 3;
         }
         document.getElementById('result').textContent = `Congratulations! You guessed it right! Secret number was ${secretNumber}. Your score: ${score}`;
         document.getElementById('guessInput').disabled = true;
     } else {
         chances--;
         if (chances === 0) {
             document.getElementById('result').textContent = `Sorry, you're out of chances. The secret number was ${secretNumber}. Try again later!`;
             document.getElementById('guessInput').disabled = true;
         } else {
             document.getElementById('result').textContent = `Wrong guess! You have ${chances} chances left.`;
         }
     }
 }