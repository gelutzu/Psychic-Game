var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // Creating variables to hold the number of wins, losses, an user typed array letters, 
    var wins = 0;
    var losses = 0;
    var letters = [];
    // s variable for pushing the userGuess into the letters array
    var s = "";
    // count var increaseas everytime the user types a letter
    var count = 0;
    var guessLeft = 10 - count; 

    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
    // updates the computerGuess when reset is called
    var updateComputerGuess = function() {
        this.computerGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
    };

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

      count++;
      // Determines which key was pressed.
      var userGuess = event.key;
      s = userGuess;
      letters.push(s);
      console.log(letters);

      
      if (guessLeft > 0) {

        if (userGuess === computerGuess) {
          wins++;
          myReset();
        }
        else if (count > 9) {
          losses++;
          myReset();
        }
      }
        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses
        var html =
          "<p>You chose: " + userGuess + "</p>" +
          "<p>The computer chose: " + computerGuess + "</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses left: " + (10 - count) + "</p>" +
          "<p>Your guesses so far: " + letters + "</p>";

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;
        // used to reset game after a win or loss
        function myReset() {
            count = 0;
            guessLeft = 9;
            letters = [];
            updateComputerGuess();
        }
      
    };
