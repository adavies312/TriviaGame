// initialize variables 
var correctCount = 0;
var incorrectCount = 0;
var unansweredCount = 0;
var time = 45;

$(document).ready(function () {


    // Hide trivia questions until click to start button is clicked
    $("#gameArea").hide();

    //Hide results until the end of the game
    $("#results").hide();

    //On click to start you hide the click to start button and show the game area 
    // Start counting down time
    $("#click-to-start").on("click", function () {
        $("#start-game").hide();
        $("#gameArea").show();
        startCountdown();
    });

    //Time Keeps on Ticking Ticking Ticking
    // Show the countdown
    //increment is 1 second
    function startCountdown() {

        intervalId = setInterval(countdown, 1000);

    }
//when you click Done it calls the stop function 
    $("#finished").on("click", stop);

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
    //stop function for when you click the done button 
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
        //scaling results
        //array of questions
        //variable questions =[Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10]

        //array of answers
        // answers = ["a", "c", "b", "c", "d", "d", "a", "b", "c", "d"]
        //for loop i=0 i<questions.length i++
        // if Question[i] = 
        if (Q1 === undefined) {
            unansweredCount++;
        }
        else if (Q1 === "a") {
            correctCount++;
        }
        else {
            incorrectCount++;
        }


        if (Q2 === undefined) {
            unansweredCount++;
        }
        else if (Q2 === "c") {
            correctCount++;
        }
        else {
            incorrectCount++;
        }


        if (Q3 === undefined) {
            unansweredCount++;
        }
        else if (Q3 === "b") {
            correctCount++;
        }
        else {
            incorrectCount++;
        }


        if (Q4 === undefined) {
            unansweredCount++;
        }
        else if (Q4 === "c") {
            correctCount++;
        }
        else {
            incorrectCount++;
        }


        if (Q5 === undefined) {
            unansweredCount++;
        }
        else if (Q5 === "d") {
            correctCount++;
        }
        else {
            incorrectCount++;
        }


        if (Q6 === undefined) {
            unansweredCount++;
        }
        else if (Q6 === "d") {
            correctCount++;
        }
        else {
            incorrectCount++;
        }


        if (Q7 === undefined) {
            unansweredCount++;
        }
        else if (Q7 === "a") {
            correctCount++;
        }
        else {
            incorrectCount++;
        }


        if (Q8 === undefined) {
            unansweredCount++;
        }
        else if (Q8 === "b") {
            correctCount++;
        }
        else {
            incorrectCount++;
        }


        if (Q9 === undefined) {
            unansweredCount++;
        }
        else if (Q9 === "c") {
            correctCount++;
        }
        else {
            incorrectCount++;
        }


        if (Q10 === undefined) {
            unansweredCount++;
        }
        else if (Q10 === "d") {
            correctCount++;
        }
        else {
            incorrectCount++;
        }

        // Update the DOM
        $('#correct').html(correctCount);
        $('#incorrect').html(incorrectCount);
        $('#unanswered').html(unansweredCount);


        // Reveal results
        $("#results").show();
    }

    //Reset function to restart the quiz on button click
    $("#restart").on("click", function () {
        time = 45;
        correctCount = 0;
        incorrectCount = 0;
        unansweredCount = 0;
        $("#results").hide();
        $("#gameArea").show();
        startCountdown();
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

});