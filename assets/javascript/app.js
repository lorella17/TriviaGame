
var userAnswer = '';
var correctA= 0;
var incorrectAnswer = 0;
var questionNum =0;
var count = 90;


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

    var countDown = setInterval(timer, 1000);

    // When random-button is clicked...
    $("#Start").on("click", function() {
        $(this).hide();
        countDown;
        displayTrivia();

    });

    function timer(){
        count--;
        console.log(count);
        if (count === 0) {
            clearInterval(countDown);
            $('#random-question').empty();
            $('#multiple-answers').empty();

        }

        $("#clock").html("Time remaining: " + "00:" + count + " secs");
        $("#clock").css('color', "yellow")
    }

    function displayTrivia() {
        $('#random-question').html(randomQuestions[questionNum].question);
        $('#multiple-answers').empty();

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
            console.log("inside wrong question");

            incorrectAnswer++;

            $("#Losses").text(`Losses: ${incorrectAnswer}`);
            questionNum++;
            setTimeout(displayTrivia, 3000);



            console.log(incorrectAnswer);
        } else if (userAnswer === randomQuestions[questionNum].answer){
            $('#multiple-answers').text('You are Correct');
            $("#multiple-answers").css("color", "gold");
            console.log("inside correct answer");

            correctA++;
            $("#Wins").text(`Wins: ${correctA}`);
            setTimeout(displayTrivia, 3000);
            questionNum++;


        }

    });


    });

// evendelegation
// .empty
// timeoutfunction with own interval
// pausing clock
//set timeout
