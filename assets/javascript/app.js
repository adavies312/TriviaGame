// initialize variables 
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var time = 45;

$(document).ready(function () {


    // Hide trivia questions until click to start button is clicked
    $("#gameArea").hide();

    //Hide results until the end of the game
    $("#results").hide();

    //On click 'click to start' button you run startGame
    $("#click-to-start").on("click", startGame);

    // startGame function
    // Time Keeps on Ticking Ticking Ticking (show the countdown)
    // on click to start hide button and show game area
    function startGame() {
        intervalId = setInterval(countdown, 1000);
        $("#click-to-start").hide();
        $("#gameArea").show();
    }

    // Countdown function decrements time and displays it in DOM
    function countdown() {
        time--;

        // Show time left in DOM
        $('#countdown').html(time + " Seconds");

        // When there are 0 seconds left
        if (time < 0) {
            $("#gameArea").hide();
            validateResults();
            clearInterval(intervalId);

        }
    }

    //when you click Done it calls the stop function 
    $("#done").on("click", stop);

    //stop function (for when you click the done button)
    function stop() {
        clearInterval(intervalId);
        validateResults();
        $("#gameArea").hide();

    }

    // Function that validates quiz results
    function validateResults() {

        // Check the values of radio buttons
        // stores them in new variable to check answer against
        var Q1 = $('input:radio[name="q1"]:checked').val();
        var Q2 = $('input:radio[name="q2"]:checked').val();
        var Q3 = $('input:radio[name="q3"]:checked').val();
        var Q4 = $('input:radio[name="q4"]:checked').val();
        var Q5 = $('input:radio[name="q5"]:checked').val();
        var Q6 = $('input:radio[name="q6"]:checked').val();
        var Q7 = $('input:radio[name="q7"]:checked').val();
        var Q8 = $('input:radio[name="q8"]:checked').val();
        var Q9 = $('input:radio[name="q9"]:checked').val();
        var Q10 = $('input:radio[name="q10"]:checked').val();

        // If / Else If / Else statements to determine if user got right answer
        // Scaled validating results with for loop
        var questions = [Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10];
        var answers = ["a", "c", "b", "c", "d", "d", "a", "b", "c", "d"];

        for (var i = 0; i < questions.length; i++) {
            if (questions[i] === answers[i]) {
                correct++;
            } else if (questions[i] === undefined) {
                unanswered++;
            } else {
                incorrect++;
            }
        };

        // Update the DOM
        $('#correct').html(correct);
        $('#incorrect').html(incorrect);
        $('#unanswered').html(unanswered);

        // Reveal results
        $("#results").show();
    }

    //Reset function to restart the quiz on button click
    $("#restart").on("click", function () {
        time = 45;
        correct = 0;
        incorrect = 0;
        unanswered = 0;
        $("#results").hide();
        $("#gameArea").show();
        startGame();
        countdown();
        //Clear Radio Choices from first time 
        $('input[name=q1]').attr('checked', false);
        $('input[name=q2]').attr('checked', false);
        $('input[name=q3]').attr('checked', false);
        $('input[name=q4]').attr('checked', false);
        $('input[name=q5]').attr('checked', false);
        $('input[name=q6]').attr('checked', false);
        $('input[name=q7]').attr('checked', false);
        $('input[name=q8]').attr('checked', false);
        $('input[name=q9]').attr('checked', false);
        $('input[name=q10]').attr('checked', false);

    });


     /* 
     
     --Dynamically adding content instead of displaying in HTML--
     I only was able to get it to display questions and answers. However 
     I was unable to get it to validate answers from radio buttons. Here is
     what I got:
***************************************************************************
    step 1: 
            create an object triviaQuestions with properties: questions & answers
***************************************************************************

    var triviaQuestions = [{
	question: "Where does Homer work?",
	answerList: ["Nuclear Power Plant", "Bar", "Insurance Company", "School"],
},{
	question: "What instrument does Lisa play?",
	answerList: ["Guitar", "Piano", "Saxophone", "Violin"],
},{
	question: "What family do the Simpsons live next to?",
	answerList: ["The Wiggums", "The Flanders", "The Sanders", "The Skinners"],
},{
	question: "Who shot Mr. Burns?",
	answerList: ["Snake", "Sideshow Bob", "Maggie Simpson", "Waylon Smithers"],
},{
	question: "What does the 'J' in Homer J. Simpson stand for?",
	answerList: ["Jake", "John", "Jason", "Jay"],
},{
	question: "What phrase made Bart famous?",
	answerList: ["Eat my shorts!", "Ay caramba!", "Don't have a cow, man!", "I didn't do it!"],
},{
	question: "What secret society is Homer a part of?",
	answerList: ["The Stonecutters", "Free Masons", "Duff", "Illuminati"],
},{
	question: "Where does Apu work?",
	answerList: ["7/11", "Kwik E-Mart", "Quick Stop Groceries", "Springfield Market"],
},{
	question: "How many seasons of the show are there?",
	answerList: ["22", "26", "29", "33"],
},{
	question: "Who is the local bartender?",
	answerList: ["Lenny", "Karl", "Krusty", "Moe"],
}];
***************************************************************************
        step 2:
                create a for loop to dynamically display each question
                and then append each q and a to the gameArea div in order
***************************************************************************

        for (var i=0; i< triviaQuestions.length; i++){
        var newElement = $("<div>");
        var newElement2 = $("<div>" );
        newElement.html("<br>" +"<h2>" + triviaQuestions[i].question + "</h2>" + "<br>" );
        $("#gameArea").append(newElement);
        newElement2.html("<input type='radio' name='q1' value='a'>     " + triviaQuestions[i].answerList[0] + "     <input type='radio' name='q1' value='b'>     " + triviaQuestions[i].answerList[1] + "     <input type='radio' name='q1' value='c'>     " + triviaQuestions[i].answerList[2] + "     <input type='radio' name='q1' value='d'>     " + triviaQuestions[i].answerList[3] + "<br>" )
        $("#gameArea").append(newElement2);
        };

        */
});