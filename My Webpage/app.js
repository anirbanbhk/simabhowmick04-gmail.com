function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    
    new Question("When St. Anthony's School was established?", ["1982", "1962","1984", "1964"], "1984"),
  
    new Question("Who was the founder of St. Anthony's School?", ["Fr. Mathew Kottaram", "Fr. Micheal Elango", "Fr. James Vadakeyil", "Fr. Thomas Mattathilany"], "Fr. Mathew Kottaram"),

    new Question("Who is the present Principal of St. Anthony's School?", ["Fr. Thomas D'Silva", "Fr. David S.","Fr. Thomas Pallichankudy", "Fr. Nitish R. Rarak"], "Fr. David S."),
    

    new Question("Who was the first Headmistress of St. Anthony's School?", ["Sr. Tressa Mary Csn", "Sr. Aloyshy Csn","Sr. Latha Csn", "Sr. Seraphine Csn"], "Sr. Seraphine Csn"),

    new Question("When we gave farewell to Fr. Thomas D'Silva from St. Anthony's School?", ["October 8th", "October 12th","October 6th", "October 4th"], "October 4th"),
    
    new Question("When Pre-Christmas and Release of Anthonian Tidings of 2018 was held?", ["December 5th", "December 6th","December 4th", "December 8th"], "December 5th"),

    new Question("When the Science Exibution Day of 2019 was held?", ["February 20th", "February 22th","February 24th", "February 28th"], "February 28th"),

    new Question("When the Annual School Day of 2019 was held?", ["October 1st", "October 2nd","October 3rd", "October 4th"], "October 3rd"),

    new Question("When the Food Festival Day of 2019 was held?", ["November 6th", "November 8th","November 12th", "November 18th"], "November 8th"),

    new Question("When Fr. David S. was welcomed to St. Anthony's School as a New Principal?", ["October 11th", "October 12th","October 16th", "October 18th"], "October 11th"),    

];


var quiz = new Quiz(questions);


populate();





