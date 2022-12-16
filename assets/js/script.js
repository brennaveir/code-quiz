//global variables
var startButton = document.querySelector("#startButton");
var score = 0;
var scoreEl= document.getElementById("score")
var timer = 100;
var timerEl = document.getElementById("timer");
var currentQuestion = 0
var containerEl = document.getElementById('container')

var initials = document.createElement("input")
var timerInterval

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

//enter initals and save score
function saveScores (initials) {
    var newScores = {
        initials, 
        score
    }

     var storedScores = localStorage.getItem("score") || [];
    storedScores.push(newScores); 
   localStorage.setItem("score", JSON.stringify(storedScores));
        
            
}

//set timer
function timeLeft () {

        timer--;
        timerEl.textContent = `${timer} seconds left`;

        if(timer === 0){
            timerEl.textContent = "";
            clearInterval(timerInterval);
            document.body.removeChild(questionTitleEl, option1El, option2El, option3El, option4El);
           saveScores()
        }

}

//check if answer is correct or incorrect
function checkAnswer (selectedOption){

    console.log('option', selectedOption)

    if (selectedOption === questions[currentQuestion].correctAnswer){
        score++;
        scoreEl.textContent = "Score = " + score + "/5";
        console.log("correct")
    }else {
        timer -= 10;
        timerEl.textContent = timer + " seconds left";
        scoreEl.textContent = "Score = " + score + "/5"; 
        console.log('wrong')
       
    }

    currentQuestion++;


    if(currentQuestion === 5){
        //quiz should end
        timerEl.textContent = "";
        scoreEl.textContent = "";
        clearInterval(timerInterval);
        containerEl.innerHTML = '';
        initials.setAttribute("type", "text");
        var saveInitialsButton = document.createElement("button")
        saveInitialsButton.textContent = "Save initials"
        containerEl.append(initials, saveInitialsButton);
        saveInitialsButton.addEventListener("click", function(){
            saveScores(initials.value)
            containerEl.innerHTML = "";
        } )

     //  initials.appendChild(saveInitialsButton);
    }else{
        answerQuestions()
    }

}

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
// console.log("Test"); 
startButton.setAttribute("style", "display:none")
//timeLeft();

timerInterval = setInterval(timeLeft, 1000)

answerQuestions();

}

    
//listen for start listen to be clicked
startButton.addEventListener("click", startQuiz);