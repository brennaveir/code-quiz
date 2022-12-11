var startButton = document.querySelector("#startButton");
var score = 0;
var timer = 100;

var questions = [
    {
        question: "What color is the sky?",
        option1: "Purple",
        option2: "Blue",
        option3: "Chartreuse",
        option4: "pink",
        correctAnswer: "Blue"
    },
    {
        question: "What color is the skypp?",
        option1: "Purple",
        option2: "Blue",
        option3: "Chartreuse",
        option4: "pink",
        correctAnswer: "Blue"
    }
]

function checkAnswer (selectedOption){

    console.log('option', selectedOption)
    if (selectedOption === questions[0].correctAnswer){
        //increment score
        // should go to next question
        console.log('correct')
    }else{
        //timer -= 10 => minus time
        //Should go to next question
        console.log('wrong')
    }
}

function startQuiz () {
console.log("Test"); 
startButton.setAttribute("style", "display:none")

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
 
 document.body.appendChild(questionTitleEl);
 document.body.appendChild(option1El)
 document.body.appendChild(option2El)
document.body.appendChild(option3El)
document.body.appendChild(option4El)

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