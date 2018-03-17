
var userAnswer = '';
var correctA= 0;
var incorrectAnswer = 0;
var questionNum =0;
var count = 15;


// jQuery Ready Function waits for the document to complete loading before initiating JavaScript
$(document).ready(function() {


        // ...create an object with string that will hold our random questions and answers.
        var randomQuestions = [
            {
                question: "Currently who is the best soccer player in the world?",
                choices: ['Ronaldo', 'Messi', 'Almiron', 'Mia'],
                answer: 'Ronaldo',
                userAnswer: "",
                correct: ''
            },
            {
                question: "Which MLS team holds the highest attendance record?",
                choices: ['L.A Galaxy', 'New York F.C.', 'Atlanta United', 'Seattle Sounders'],
                answer: 'Atlanta United',
                userAnswer: "",
                correct: true
            }, {
                question: "What country is hosting the 2018 World Cup?",
                choices: ['Russia', 'Mexico', 'Spain', 'Dubai'],
                answer: 'Russia',
                userAnswer: "",
                correct: true
            }, {
                question: "Which country has won the most World Cups?",
                choices: ['Brazil', 'Guatemala', 'U.S.A', 'Uruguay'],
                answer: 'Brazil',
                userAnswer: "",
                correct: true
            }, {
                question: "Which team has won the most UEFA Champions League titles?",
                choices: ['Real Madrid', 'Barcelona', 'PSG', 'Manchester United'],
                answer: 'Real Madrid',
                userAnswer: "",
                correct: true
            }, {
                question: "Where did Atlanta United begin playing their home games?",
                choices: ['Georgia', 'Turner Field', 'Bobby Dodd Stadium', 'Marietta'],
                answer: 'Boddy Dodd Stadium',
                userAnswer: "",
                correct: true
            }, {
                question: "Which player listed below does NOT play for Atlanta United?",
                choices: ['Martinez', 'Messi', 'Almiron', 'Villalba'],
                answer: 'Messi',
                userAnswer: "",
                correct: true
            }, {
                question: "When did Atlanta United join the MLS?",
                choices: ['2000', '2016', '2017', '2018'],
                answer: '2017',
                userAnswer: "",
                correct: true
            }, {
                question: "Which league listed below is not from Europe?",
                choices: ['Premier League', 'La Liga', 'Serie A', 'M.L.S'],
                answer: 'M.L.S',
                userAnswer: "",
                correct: true
            }, {
                question: "Who is the best female U.S soccer player of all time",
                choices: ['Martha', 'Morgan', 'Ronaldinha', 'Mia Ham'],
                answer: 'Mia Ham',
                userAnswer: "",
                correct: true
            }
        ];

    // When random-button is clicked...
    $("#Start").on("click", function() {
        $(this).hide();
        counter = setInterval(timer, 1000);
        displayTrivia();

    });

    function timer(){
        count--;
        if (count <= 0) {
            clearInterval(counter);
            return;
        }

        $("#clock").html("Time remaining: " + "00:" + count + " secs");
        $("#clock").css('color', "yellow")
    }

    function displayTrivia() {
        $('#random-question').html(randomQuestions[questionNum].question);



        // // Then create a loop that generates the question.
        for (var i = 0; i < randomQuestions[questionNum].choices.length; i++) {
            var button = $('<button>');
            button.text(randomQuestions[questionNum].choices[i]);

            $('#multiple-answers').append(button);
            $("#multiple-answers").css("color", "orange");

        }



    }

    $('#multiple-answers').on('click', 'button', function (e) {
        userAnswer = $(this).text();



        // randomQuestions[0].correct;
        if(userAnswer !== randomQuestions[questionNum].answer){
            $('#multiple-answers').text('Wrong!!');
            $("#multiple-answers").css("color", "red");
            
            incorrectAnswer++;

            $("#Losses").html(incorrectAnswer);
            questionNum++;
            setTimeout(timerExpired, 10000);

            randomQuestions= setInterval(displayTrivia, 1000);




            console.log(incorrectAnswer);
        } else if (userAnswer === randomQuestions[questionNum].answer){
            $('#multiple-answers').text('You are Correct');
            $("#multiple-answers").css("color", "gold");

            correctA++;
            $("#Wins").html(correctA);
            setTimeout(timerExpired, 10000);
            questionNum++;
            displayTrivia();


        }

    });


    });

// evendelegation
// .empty
// timeoutfunction with own interval
// pausing clock

