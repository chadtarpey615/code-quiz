// Assign variables
let timer = document.querySelector("#timer");
let startbtn = document.querySelector("#start-quiz");
let stopbtn = document.querySelector("#stop-quiz")
let createUl = document.getElementById("answer")
let newQuest = document.querySelector(".questions");
let button1 = document.getElementById("answer1");
let button2 = document.getElementById("answer2");
let button3 = document.getElementById("answer3");
let button4 = document.getElementById("answer4");
let showScore = document.getElementById("show-score");
let highScores = document.getElementById("high-score");
let scoreList = document.getElementById("scoreList")
let scoreEnter = document.getElementById("scoreEnter");
let mainForm = document.getElementById("main-Form");
let buttonGroup = document.getElementById("buttonGroup");
let correct = document.getElementById("correct");
let inCorrect = document.getElementById("incorrect");
let resetGame = document.getElementById("reset");
let quizBody = document.getElementById("quizBody");

let scoreText;
let startingTime = 1;
let totalSeconds = startingTime * 60;
let interval;
let questionsLeft = 0;
let score = 0;
let finalScore;
let totalScore = [];


let questions = [{

    question: "The let statement is used to?",
    choices: ["Retrieve a variable descriptor", "Declare a member of a class", "Create a new local variable", "Change a constant"],
    answer: "Create a new local variable"
}, {
    question: "What is NaN in JavaScript?",
    choices: ["Not a Number", "undefined", "N/A", "No available Number"],
    answer: "Not a Number"
}, {
    question: "How to ask the user a question and save it in a string?",
    choices: ["alert", "prompt", "console.log", "confirm"],
    answer: "prompt"
}, {
    question: "What is a boolean?",
    choices: ["string", "undefined", "true/false statement", "array"],
    answer: "true/false statement"
}, {
    question: "When you don't know what to do in JavaScript you should?",
    choices: ["give up, run the code anyways", "use google to ge a better understanding", "give up", "Call Mom"],
    answer: "use google to ge a better understanding"
}];

button1.setAttribute("style", "display: none");
button2.setAttribute("style", "display: none");
button3.setAttribute("style", "display: none");
button4.setAttribute("style", "display: none");
showScore.setAttribute("style", "display: none");
mainForm.setAttribute("style", "display: none");


function startQuiz() {
    setTimer();
    buttonGroup.setAttribute("style", "display: none")


    newQuestion();
    newQuest.setAttribute("style", "display: block");


    //newQuest.classList.add("hide");

}

function newQuestion() {

    if (questionsLeft < questions.length) {
        newQuest.innerHTML = questions[questionsLeft].question;
        button1.innerHTML = questions[questionsLeft].choices[0];
        button2.innerHTML = questions[questionsLeft].choices[1];
        button3.innerHTML = questions[questionsLeft].choices[2];
        button4.innerHTML = questions[questionsLeft].choices[3];

        button1.setAttribute("style", "display: inline-block");
        button2.setAttribute("style", "display: inline-block");
        button3.setAttribute("style", "display: inline-block");
        button4.setAttribute("style", "display: inline-block");
    } else {

        checkScore();
    }
};


// get the next question
function nextQuestion() {
    //console.log(this.textContent);
    if (this.textContent === questions[questionsLeft].answer) {
        correct.setAttribute("style", "display: inline-block")
       score += 20;

    } else if (this.textContent !== questions[questionsLeft].answer) {
        inCorrect.setAttribute("style", "display: inline-block")

        score -= 0;
        totalSeconds -= 10;
    }

    questionsLeft++;
    
    newQuestion();

}

//  set timer
function setTimer() {
    const minutes = Math.floor(totalSeconds / 60);
    interval = setInterval(function () {
        timer.textContent = totalSeconds--;

        if (totalSeconds === 0) {
            alert("You ran out of time sorry please try again")

        } else if (questionsLeft === 5) {

            clearInterval(interval);
            timer.textContent = score + totalSeconds;
            finalScore = score + totalSeconds;

            showScore.setAttribute("style", "display: inline-block");

            stopTimer();

        }
    }, 1000)
};

init();

function setScore() {
    // Clear todoList element and update todoCountSpan
    scoreList.innerHTML = "";


    // Render a new li for each name
    for (var i = 0; i < totalScore.length; i++) {
        var addScore = totalScore[i];

        var li = document.createElement("li");
        li.textContent = addScore;
        li.setAttribute("data-index", i);

        scoreList.appendChild(li);
    }
}


function init() {
    // Parsing the JSON string to an object
    let userScores = JSON.parse(localStorage.getItem("totalScore"));

    // If scores were retrieved from localStorage, update the score array to it
    if (userScores !== null) {
        totalScore = userScores;
    }

    setScore();
}

function storeScores() {
    // Stringify and set "scoreArray" key in localStorage to score array
    localStorage.setItem("totalScore", JSON.stringify(totalScore));
    console.log(localStorage)
}

// When form is submitted...
mainForm.addEventListener("submit", function (event) {
    event.preventDefault();

    scoreText = scoreEnter.value.trim();

    // Return from function early if submitted scoreEnter is blank
    if (scoreText === "") {
        return;
    }

    // Add new scoreEnter to scoreArray array, clear the input
    totalScore.push(scoreText + " " + finalScore);

    scoreEnter.value = "";

    // Store updated scores in localStorage, re-render the list
    storeScores();
    setScore();
});
function checkScore() {
    scoreScreen.setAttribute("style", "display: inline-block, text-align: center")
    button1.setAttribute("style", "display: none");
    button2.setAttribute("style", "display: none");
    button3.setAttribute("style", "display: none");
    button4.setAttribute("style", "display: none");
    buttonGroup.setAttribute("style", "display: none")
    newQuest.setAttribute("style", "display: none");
    quizBody.setAttribute("style", "display: none");
    mainForm.setAttribute("style", "display: inline-block");
    correct.setAttribute("style", "display: none");
    inCorrect.setAttribute("style", "display: none");



    clearInterval(timer);
};

function endGame() {
    stopTimer();
    scoreText;
    startingTime = 1;
    totalSeconds = startingTime * 60;
    interval;
    questionsLeft = 0;
    score = 0;
    finalScore;
    totalScore = [];
}

function restartGame() {
    endGame();
    mainForm.setAttribute("style", "display: none");
    newQuest.setAttribute("style", "display: none");
    buttonGroup.setAttribute("style", "display: block")
    quizBody.setAttribute("style", "display: inline-block");
    //startQuiz();
}

function stopTimer() {
    clearInterval(interval);
}
// add event listeners
startbtn.addEventListener("click", startQuiz);
button1.addEventListener("click", nextQuestion);
button2.addEventListener("click", nextQuestion);
button3.addEventListener("click", nextQuestion);
button4.addEventListener("click", nextQuestion);
highScores.addEventListener("click", checkScore);
resetGame.addEventListener("click", restartGame);






