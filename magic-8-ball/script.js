$(document).ready(function(){

    // Create object:
    var magic8Ball = {};
    
    // Initialize array of answers:
    magic8Ball.listOfAnswers = ["Most certainly favorable.", "Do not count on it.", "Without a doubt.", "Fortune favors the bold.", "Looks promising.", "Very doubtful.", "Not in the near future.", "My sources say no.", "Better not tell you now.", "Unable to concentrate, ask again later.", "Check back later.", "Keep pressing forward.", "The future is wide open.", "Better prepare for it.", "Signs point to yes.", "Outlook is good."];

    // Obtain answer function, generate random number to select random answer from array:
    magic8Ball.askQuestion = function(question){
      var randomNumber = Math.random();
      var randomAnswer = randomNumber * this.listOfAnswers.length;
      var randomIndex = Math.floor(randomAnswer);
      var answer = this.listOfAnswers[randomIndex];

      $("#8ball").effect( "shake" );
      $("#answer").text( answer );
      $("#answer").fadeIn(4000);
      $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");

      console.log(question);
      console.log(answer);
  };

  $("#answer").hide();

    // Get prompt to appear on button click:
    var onClick = function() {

      $("#answer").hide();
      $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");

    // Wait half a second before showing prompt:
    setTimeout(
      function() {
        var question = prompt("Ask a YES or NO question.");
        magic8Ball.askQuestion(question); // Call response method, passing in question var.
      }, 500);
   
  };
   
  $("#questionButton").click( onClick );
        
});