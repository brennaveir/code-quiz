var startButton = document.querySelector("#startButton");
var score = 0;
var timer = 100;
var timerEl = document.getElementById("timer");
var questions = [
    {
        question: "How do you display a message on the console?",
        option1: "message.display",
        option2: "display.console",
        option3: "message.log",
        option4: "console.log",
        correctAnswer: "console.log"
    },
    {
        question: "Which of the following is a set of statements that performs a task or calculates a value",
        option1: "function",
        option2: "array",
        option3: "object",
        option4: "boolean",
        correctAnswer: "function"
    },
    {
        question: "In which HTML element do we put javascript inside?",
        option1: "<javascript>",
        option2: "<script>",
        option3: "<js>",
        option4: "<scripting>",
        correctAnswer: "<script>"
    },  
    {
        question: "Javascript and Java are the same",
        option1: "True",
        option2: "False",
        correctAnswer: "False"
        
    },
    {
        question: "How do you write a comment in javascript?",
        option1: "//comment",
        option2: "'comment'",
        option3: "<!--comment-->",
        option4: "comments are not allowed in javascript",
        correctAnswer: "//comment"
    }
]

function timeLeft () {
    var timerInterval = setInterval(function () {
        timer--;
        timerEl.textContent = `${timer} seconds left`;

        if(timer === 0) {
            clearInterval(timerInterval);
            //display score and allow user to input initials
        }
    }, 1000)
}

function checkAnswer (selectedOption){

    console.log('option', selectedOption)
    if (selectedOption === questions[0].correctAnswer){
        score++;
        // should go to next question
        // console.log(score)
    }else{
        timer -= 10;
        //Should go to next question
        // console.log('wrong')
    }
}

function startQuiz () {
// console.log("Test"); 
startButton.setAttribute("style", "display:none")
timeLeft();


 var questionTitleEl = document.createElement('h2'); 
 var option1El = document.createElement('button');
 var option2El = document.createElement('button');
 var option3El = document.createElement('button');
 var option4El = document.createElement('button');
 


 questionTitleEl.textContent = questions[0].question;
  option1El.textContent = questions[0].option1;
 option2El.textContent = questions[0].option2;
 option3El.textContent = questions[0].option3;
 option4El.textContent = questions[0].option4;
 
 
 
 document.body.append(questionTitleEl, option1El, option2El, option3El, option4El);
//  document.body.appendChild(option1El)
//  document.body.appendChild(option2El)
// document.body.appendChild(option3El)
// document.body.appendChild(option4El)


option1El.addEventListener("click", function(){
    checkAnswer(questions[0].option1)
});
option2El.addEventListener("click", function(){
    checkAnswer(questions[0].option2)
});
option3El.addEventListener("click", function(){
    checkAnswer(questions[0].option3)
});
option4El.addEventListener("click", function(){
    checkAnswer(questions[0].option4)
});;

}
startButton.addEventListener("click", startQuiz);