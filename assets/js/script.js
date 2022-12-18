//global variables
var startButton = document.querySelector("#startButton");
var currentScore = 0;
var scoreEl= document.getElementById("score")
var timer = 100;
var timerEl = document.getElementById("timer");
var currentQuestion = 0
var containerEl = document.getElementById("container")
var unorderedListEl = document.getElementById("scoreHistory")
var initials = document.createElement("input")
var timerInterval
var scoreHistoryEl = document.getElementById("scoreHistory");


//Quiz questions
var questions = [
    {
        question: "How do you display a message on the console?",
        choices: ["message.display","display.console","message.log","console.log"],
       correctAnswer: "console.log",
    },
    {
        question: "Which of the following is a set of statements that performs a task or calculates a value",
        choices: ["function","array","object","boolean"],
        correctAnswer: "function"
    },
    {
        question: "In which HTML element do we put javascript inside?",
        choices: ["<javascript>","<script>","<js>","<scripting>"],
        correctAnswer: "<script>"
    },  
    {
        question: "Javascript has a file extension of:",
        choices: [".java",".javascript", ".js", ".script"],
        correctAnswer: ".js"
        
    },
    {
        question: "How do you write a comment in javascript?",
        choices: ["//comment","'comment'","<!--comment-->","comments are not allowed in javascript"],
        correctAnswer: "//comment"
    }
]

function saveScores (initials) { 
var allScores = JSON.parse(localStorage.getItem("allScores")) || [];


     var displayScore = {
        initials,
        currentScore
    }
    
    allScores.push(displayScore);
    allScores.sort(
        (function (a,b) {
        if (a.currentScore === b.currentScore) {
            return a.currentScore - b.currentScore
        }
        return b.currentScore > a.currentScore ? 1 : -1
    }));
   localStorage.setItem("allScores",JSON.stringify(allScores));
    unorderedListEl.textContent = "Scores"
    allScores.forEach(element => {
    var initialsLi = document.createElement('li');
    initialsLi.textContent = "Initials: " + element.initials + " Score: " + element.currentScore + "/5";
    scoreHistoryEl.append(initialsLi)
});
}

//set timer
function timeLeft () {

        timer--;
        timerEl.textContent = `${timer} seconds left`;

        if(timer === 0){
            timerEl.textContent = "";
            clearInterval(timerInterval);
            containerEl.innerHTML = "";
           var saveInitialsButton = document.createElement("button")
        saveInitialsButton.textContent = "Save initials"
        containerEl.append(initials, saveInitialsButton);
        saveInitialsButton.addEventListener("click", function(){
            saveScores(initials.value)
            containerEl.innerHTML = "";
            scoreEl.textContent = "";
        } )
        }

}

//check if answer is correct or incorrect
function checkAnswer (selectedOption){

    console.log('option', selectedOption)

    if (selectedOption === questions[currentQuestion].correctAnswer){
        currentScore++;
        scoreEl.textContent = "Score = " + currentScore + "/5";
        console.log("correct")
    }else {
        timer -= 10;
        timerEl.textContent = timer + " seconds left";
        scoreEl.textContent = "Score = " + currentScore + "/5"; 
        console.log('wrong')
       
    }

    currentQuestion++;


    if(currentQuestion === 5){
       //quiz should end
        timerEl.textContent = "";
        clearInterval(timerInterval);
        containerEl.innerHTML = '';
        initials.setAttribute("type", "text");
        var saveInitialsButton = document.createElement("button")
        saveInitialsButton.textContent = "Save initials"
        containerEl.append(initials, saveInitialsButton);
        saveInitialsButton.addEventListener("click", function(){
            saveScores(initials.value)
            containerEl.innerHTML = "";
            scoreEl.textContent = "";
        } )

    }else{
        answerQuestions()
    }

}
// Cycle through each question
function answerQuestions (){
    containerEl.innerHTML = ''
    var questionTitleEl = document.createElement('h2'); 
 var option1El = document.createElement('button');
 var option2El = document.createElement('button');
 var option3El = document.createElement('button');
 var option4El = document.createElement('button');

    questionTitleEl.textContent = questions[currentQuestion].question;
    option1El.textContent = questions[currentQuestion].choices[0];
     option2El.textContent = questions[currentQuestion].choices[1];
     option3El.textContent = questions[currentQuestion].choices[2];
     option4El.textContent = questions[currentQuestion].choices[3];
     
     containerEl.append(questionTitleEl, option1El, option2El, option3El, option4El);
    
    option1El.addEventListener("click", function(){
        checkAnswer(questions[currentQuestion].choices[0])
    });
    option2El.addEventListener("click", function(){
        checkAnswer(questions[currentQuestion].choices[1])
    });
    option3El.addEventListener("click", function(){
        checkAnswer(questions[currentQuestion].choices[2])
    });
    option4El.addEventListener("click", function(){
        checkAnswer(questions[currentQuestion].choices[3])
    });

}

//ititiate quiz and go through array of questions
function startQuiz () {
startButton.setAttribute("style", "display:none")
scoreHistoryEl.innerText = ""

timerInterval = setInterval(timeLeft, 1000)

answerQuestions();

}

//listen for start listen to be clicked
startButton.addEventListener("click", startQuiz);