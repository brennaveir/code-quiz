//global variables
var startButton = document.querySelector("#startButton");
var questionTitleEl = document.createElement('h2'); 
 var option1El = document.createElement('button');
 var option2El = document.createElement('button');
 var option3El = document.createElement('button');
 var option4El = document.createElement('button');
var score = 0;
var scoreEl= document.getElementById("score")
var timer = 100;
var timerEl = document.getElementById("timer");
var currentQuestion = 0

var initials = document.createElement("input")

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
function saveScores () {
     var storedScores = localStorage.getItem("scores")      
    localStorage.setItem("score", storedScores);
            initials.setAttribute("type", "text")
            document.body.appendChild(initials)
            console.log(initials)
}

//set timer
function timeLeft () {
    var timerInterval = setInterval(function () {
        timer--;

        if (timer >= 1)
        timerEl.textContent = `${timer} seconds left`;

        else if(timer === 0) {
            timerEl.textContent = "";
            clearInterval(timerInterval);
            document.body.removeChild(questionTitleEl, option1El, option2El, option3El, option4El);
           saveScores()
        }
    }, 1000)
}

//check if answer is correct or incorrect
function checkAnswer (selectedOption){

    console.log('option', selectedOption)
    if (selectedOption === questions[0].correctAnswer){
        score++;
        scoreEl.textContent = "Score = " + score + "/5";
       currentQuestion++;
       startQuiz();
        
        console.log("correct")
    }
    else if (selectedOption === questions[1].correctAnswer){
        score++;
        scoreEl.textContent = "Score = " + score + "/5";
       currentQuestion++;
       startQuiz();
        
        console.log("correct")
    }
    else if (selectedOption === questions[2].correctAnswer){
    score++;
    scoreEl.textContent = "Score = " + score + "/5";
   currentQuestion++;
   startQuiz();
    
    console.log("correct")
    }
    else if (selectedOption === questions[3].correctAnswer){
        score++;
        scoreEl.textContent = "Score = " + score + "/5";
       currentQuestion++;
       startQuiz();
        
        console.log("correct")
        }
    else if (selectedOption === questions[4].correctAnswer){
            score++;
            scoreEl.textContent = "Score = " + score + "/5";
           currentQuestion++;
           startQuiz();
            
            console.log("correct")
            }
    else {
        // timer = timer - 10;
        scoreEl.textContent = "Score = " + score + "/5";
        currentQuestion++;

        
        console.log('wrong')
        startQuiz()
    }
}

//ititiate quiz and go through array of questions
function startQuiz () {
// console.log("Test"); 
startButton.setAttribute("style", "display:none")
timeLeft();

//Question 1
 if (currentQuestion === 0) { 

questionTitleEl.textContent = questions[0].question;
option1El.textContent = questions[0].choices[0];
 option2El.textContent = questions[0].choices[1];
 option3El.textContent = questions[0].choices[2];
 option4El.textContent = questions[0].choices[3];
 
document.body.append(questionTitleEl, option1El, option2El, option3El, option4El);



option1El.addEventListener("click", function(){
    checkAnswer(questions[0].choices[0])
});
option2El.addEventListener("click", function(){
    checkAnswer(questions[0].choices[1])
});
option3El.addEventListener("click", function(){
    checkAnswer(questions[0].choices[2])
});
option4El.addEventListener("click", function(){
    checkAnswer(questions[0].choices[3])
});;
}
 
//Question 2
if (currentQuestion === 1) { 
    document.body.removeChild(questionTitleEl, option1El, option2El, option3El, option4El)
    
    questionTitleEl.textContent = questions[1].question;
    option1El.textContent = questions[1].choices[0];
     option2El.textContent = questions[1].choices[1];
     option3El.textContent = questions[1].choices[2];
     option4El.textContent = questions[1].choices[3];
     
    document.body.append(questionTitleEl, option1El, option2El, option3El, option4El);
   
    
    
    option1El.addEventListener("click", function(){
        checkAnswer(questions[1].choices[0])
    });
    option2El.addEventListener("click", function(){
        checkAnswer(questions[1].choices[1])
    });
    option3El.addEventListener("click", function(){
        checkAnswer(questions[1].choices[2])
    });
    option4El.addEventListener("click", function(){
        checkAnswer(questions[1].choices[3])
    });;
    }

    //Question 3
    if (currentQuestion === 2) { 
        document.body.removeChild(questionTitleEl, option1El, option2El, option3El, option4El);
        
        questionTitleEl.textContent = questions[2].question;
        option1El.textContent = questions[2].choices[0];
         option2El.textContent = questions[2].choices[1];
         option3El.textContent = questions[2].choices[2];
         option4El.textContent = questions[2].choices[3];
         
        document.body.append(questionTitleEl, option1El, option2El, option3El, option4El);
       
        
        
        option1El.addEventListener("click", function(){
            checkAnswer(questions[2].choices[0])
        });
        option2El.addEventListener("click", function(){
            checkAnswer(questions[2].choices[1])
        });
        option3El.addEventListener("click", function(){
            checkAnswer(questions[2].choices[2])
        });
        option4El.addEventListener("click", function(){
            checkAnswer(questions[2].choices[3])
        });;
        }
        
        //Question 4
        if (currentQuestion === 3) { 
            document.body.removeChild(questionTitleEl, option1El, option2El, option3El, option4El)
            
            questionTitleEl.textContent = questions[3].question;
            option1El.textContent = questions[3].choices[0];
             option2El.textContent = questions[3].choices[1];
             option3El.textContent = questions[3].choices[2];
             option4El.textContent = questions[3].choices[3];
            
             document.body.append(questionTitleEl, option1El, option2El, option3El, option4El);
           
            
            
            option1El.addEventListener("click", function(){
                checkAnswer(questions[3].choices[0])
            });
            option2El.addEventListener("click", function(){
                checkAnswer(questions[3].choices[1])
            });
            option2El.addEventListener("click", function(){
                checkAnswer(questions[3].choices[2])
            });
            option2El.addEventListener("click", function(){
                checkAnswer(questions[3].choices[3])
            });
            }

            //Question 5
            if (currentQuestion === 4) { 
                document.body.removeChild(questionTitleEl, option1El, option2El)
                questionTitleEl.textContent = questions[4].question;
                option1El.textContent = questions[4].choices[0];
                 option2El.textContent = questions[4].choices[1];
                 option3El.textContent = questions[4].choices[2];
                 option4El.textContent = questions[4].choices[3];
                 
                document.body.append(questionTitleEl, option1El, option2El, option3El, option4El);
                //  document.body.appendChild(option1El)
                //  document.body.appendChild(option2El)
                // document.body.appendChild(option3El)
                // document.body.appendChild(option4El)
                
                
                option1El.addEventListener("click", function(){
                    checkAnswer(questions[4].choices[0])
                });
                option2El.addEventListener("click", function(){
                    checkAnswer(questions[4].choices[1])
                });
                option3El.addEventListener("click", function(){
                    checkAnswer(questions[4].choices[2])
                });
                option4El.addEventListener("click", function(){
                    checkAnswer(questions[4].choices[3])
                });;
                }
                    if (currentQuestion === 5) {
                        document.body.removeChild(questionTitleEl, option1El, option2El);
                        saveScores();

                    }
}

    
//listen for start listen to be clicked
startButton.addEventListener("click", startQuiz);