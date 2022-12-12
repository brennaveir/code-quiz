var startButton = document.querySelector("#startButton");
var score = 0;
var scoreEl= document.getElementById("score")
var timer = 100;
var timerEl = document.getElementById("timer");
var currentQuestion = 0
var storedScores = []
var questions = [
    {
        question: "How do you display a message on the console?",
        choices: ["message.display","display.console","message.log","console.log"],
       correctAnswer: 3,
    },
    {
        question: "Which of the following is a set of statements that performs a task or calculates a value",
        choices: ["function","array","object","boolean"],
        correctAnswer: 0
    },
    {
        question: "In which HTML element do we put javascript inside?",
        choices: ["<javascript>","<script>","<js>","<scripting>",],
        correctAnswer: 1
    },  
    {
        question: "Javascript and Java are the same",
        choices: ["True","False",],
        correctAnswer: 1
        
    },
    {
        question: "How do you write a comment in javascript?",
        choices: ["//comment","'comment'","<!--comment-->","comments are not allowed in javascript",
    ],
        correctAnswer: 0
    }
]



function timeLeft () {
    var timerInterval = setInterval(function () {
        timer--;
        timerEl.textContent = `${timer} seconds left`;

        if(timer === 0) {
            clearInterval(timerInterval);
            storedScores.push(score + "/5")
            //enter initials
        }
    }, 1000)
}

function checkAnswer (selectedOption){

    console.log('option', selectedOption)
    if (selectedOption === questions[0].correctAnswer){
        score++;
        scoreEl.textContent = "Score = " + score + "/5";
       currentQuestion++;
       startQuiz();
        // should go to next question
        console.log("correct")
    }
    else if (selectedOption === questions[1].correctAnswer){
        score++;
        scoreEl.textContent = "Score = " + score + "/5";
       currentQuestion++;
       startQuiz();
        // should go to next question
        console.log("correct")
    }
    else if (selectedOption === questions[2].correctAnswer){
    score++;
    scoreEl.textContent = "Score = " + score + "/5";
   currentQuestion++;
   startQuiz();
    // should go to next question
    console.log("correct")
    }
    else if (selectedOption === questions[3].correctAnswer){
        score++;
        scoreEl.textContent = "Score = " + score + "/5";
       currentQuestion++;
       startQuiz();
        // should go to next question
        console.log("correct")
        }
    else if (selectedOption === questions[4].correctAnswer){
            score++;
            scoreEl.textContent = "Score = " + score + "/5";
           currentQuestion++;
           startQuiz();
            // should go to next question
            console.log("correct")
            }
    else {
        timer = timer - 10;
        scoreEl.textContent = "Score = " + score + "/5";
        currentQuestion++;

        //Should go to next question
        console.log('wrong')
        startQuiz()
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

 if (currentQuestion === 0) { 
questionTitleEl.textContent = questions[0].question;
option1El.textContent = questions[0].choices[0];
 option2El.textContent = questions[0].choices[1];
 option3El.textContent = questions[0].choices[2];
 option4El.textContent = questions[0].choices[3];
 
document.body.append(questionTitleEl, option1El, option2El, option3El, option4El);
//  document.body.appendChild(option1El)
//  document.body.appendChild(option2El)
// document.body.appendChild(option3El)
// document.body.appendChild(option4El)


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

if (currentQuestion === 1) { 
    questionTitleEl.textContent = questions[1].question;
    option1El.textContent = questions[1].choices[0];
     option2El.textContent = questions[1].choices[1];
     option3El.textContent = questions[1].choices[2];
     option4El.textContent = questions[1].choices[3];
     
    document.body.append(questionTitleEl, option1El, option2El, option3El, option4El);
    //  document.body.appendChild(option1El)
    //  document.body.appendChild(option2El)
    // document.body.appendChild(option3El)
    // document.body.appendChild(option4El)
    
    
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

    if (currentQuestion === 2) { 
        questionTitleEl.textContent = questions[2].question;
        option1El.textContent = questions[2].choices[0];
         option2El.textContent = questions[2].choices[1];
         option3El.textContent = questions[2].choices[2];
         option4El.textContent = questions[2].choices[3];
         
        document.body.append(questionTitleEl, option1El, option2El, option3El, option4El);
        //  document.body.appendChild(option1El)
        //  document.body.appendChild(option2El)
        // document.body.appendChild(option3El)
        // document.body.appendChild(option4El)
        
        
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
            checkAnswer(questions[2].choies[3])
        });;
        }

        if (currentQuestion === 3) { 
            questionTitleEl.textContent = questions[3].question;
            option1El.textContent = questions[3].choices[0];
             option2El.textContent = questions[3].choices[1];
             
            document.body.append(questionTitleEl, option1El, option2El);
            //  document.body.appendChild(option1El)
            //  document.body.appendChild(option2El)
            // document.body.appendChild(option3El)
            // document.body.appendChild(option4El)
            
            
            option1El.addEventListener("click", function(){
                checkAnswer(questions[3].choices[0])
            });
            option2El.addEventListener("click", function(){
                checkAnswer(questions[3].choices[1])
            });
            }

            if (currentQuestion === 4) { 
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
}

    

startButton.addEventListener("click", startQuiz);