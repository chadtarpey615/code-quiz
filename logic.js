// Assign variables
let timer = document.querySelector("#timer");
let startbtn = document.querySelector("#start-quiz");
let stopbtn = document.querySelector("#stop-quiz")

let newQuest = document.querySelector(".questions");
let button1 = document.getElementById("answer1");
let button2 = document.getElementById("answer2");
let button3 = document.getElementById("answer3");
let button4 = document.getElementById("answer4");

let startingTime = 1;
let totalSeconds = startingTime * 60;
let interval;
let questionsLeft = 4;
let score = 0;
let questions = [{

    question: "What is the difference between const and let in JavaScript",
    choices: ["Nothing, they are the same", "you dont use const in JavaScript", "Const can not be reassigned while let can be reassigned"],
    answer: "Const can not be reassigned while let can be reassigned"
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
    choices: ["give up, run the code anyways", "use google to ge a better understanding", "give up"],
    answer: "use google to ge a better understanding"
}];

button1.setAttribute("style", "display: none");
button2.setAttribute("style", "display: none");
button2.setAttribute("style", "display: none");
button4.setAttribute("style", "display: none");


function startQuiz(event) {
    event.preventDefault();
    setTimer();
    randomQuestion();
    newQuest.classList.add("hide");





}


function randomQuestion() {



    newQuest.innerHTML = questions[questionsLeft].question;
    button1.innerHTML = questions[questionsLeft].choices[0];
    button2.innerHTML = questions[questionsLeft].choices[1];
    button3.innerHTML = questions[questionsLeft].choices[2];
    button4.innerHTML = questions[questionsLeft].choices[3];
    button1.setAttribute("style", "display: inline-block");
    button2.setAttribute("style", "display: inline-block");
    button3.setAttribute("style", "display: inline-block");
    button4.setAttribute("style", "display: inline-block");


    // Tried using a forEach for my choices
    //questions[questionsLeft].choices.forEach(function (choices) {
    // let li = document.createElement("li");
    //createUl.appendChild(li)

    //li.innerHTML += choices + " <button id="+choices+">submit</button>"
    //ea++;
    //newQuest.classList.remove("hide")
    //})

};



function nextQuestion() {
    //console.log(this.textContent);
    if (this.textContent === questions[questionsLeft].answer) {
        score += 20;
    } else {
        score -= 0;
        totalSeconds -= 10;
    }
    questionsLeft--;
    randomQuestion();

}


//  set timer
function setTimer() {
    const minutes = Math.floor(totalSeconds / 60);
    interval = setInterval(function () {
        timer.textContent = totalSeconds--;
        if (totalSeconds === 0) {
            alert("You ran out of time sorry please try again")
        } else (questionsLeft === -1) {
            alert("Congrats!! You have finshed the quiz");
            clearInterval(interval);
            score = score + totalSeconds;
            stopTimer();
        }
    }, 1000)
};

function stopTimer() {
    clearInterval(interval);
}



startbtn.addEventListener("click", startQuiz);
//stopbtn.addEventListener("click", stopTimer);
button1.addEventListener("click", nextQuestion);
button2.addEventListener("click", nextQuestion);
button3.addEventListener("click", nextQuestion);
button4.addEventListener("click", nextQuestion);

// function for getting wrong //

// function for correct answer

//
//let question2 = document.createElement("h1");
//let choices1 = document.createElement("li");