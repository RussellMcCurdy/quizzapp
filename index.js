function beginQuiz() {
    $("#begin").on('click', function(event) {
    displayQuestion();
  });
  console.log("beginquiz is working");
};

function displayQuestion() {
  let question = STORE.questions[STORE.currentQuestion];
  let choices = question.choices;
  let questionHtml = 
  $(`<h2>Question: ${STORE.currentQuestion + 1} out of ${STORE.questions.length} <br> Correct: ${STORE.correct} <br> Incorrect: ${STORE.incorrect}</h2>
  <form id="questions" method="post">
        <fieldset>
            <legend><span>${question.question}</span></legend>
                <div class = questions>
                    <input type="radio" name="answers" id="answerOne" value="${question.choices[0]}"/>
                        <label for="option1">${choices[0]}</label> 
                </div>
                <div class = questions>
                    <input type="radio" name="answers" id="answerTwo" value="${question.choices[1]}"/>
                        <label for="option2">${choices[1]}</label>
                </div>
                <div class = questions>
                    <input type="radio" name="answers" id="answerThree" value="${question.choices[2]}"/>
                        <label for="option3">${choices[2]}</label>
                </div>
                <div class = "questions" id="questionFour">
                    <input type="radio" name="answers" id="answerFour" value="${question.choices[3]}"/>
                        <label for="option4">${choices[3]}</label>
                </div>
                </div>
                <div id="correct">${question.answerCorrect}</div>
                <div id="incorrect">${question.answerIncorrect}</div>  
                <div class="submit button">
                    <button type="submit" class="submit" id = "js-submit">Submit</button>
                    <button type = "button" id="next"> Next Question</button>
                </div>  
        </fieldset>
      </form>;`);
    $("main").html(questionHtml);
    $("#next").hide();
    $("#correct").hide();
    $("#incorrect").hide();
    console.log("displayQuestion is working");
};


function nextQuestion() {
  $('body').on('click',"#next", function(event) {
    if (STORE.currentQuestion === STORE.questions.length) {
      displayResults();
    } 
    else {
    displayQuestion();
    }
  });
  console.log("nextQuestion is working");
};

function displayResults() {
  let results = 
      `<fieldset role="end">
          <legend>Results!</legend>
            <p>Thank you for taking this quiz. <br> You scored ${STORE.correct} out of ${STORE.questions.length}.</p>
            <button type="button" id="restart">Restart Quiz</button>
      </fieldset>`
  $("main").html(results);
  console.log("displayResults is working");
}
function restartQuiz() {
  $('body').on('click',"#restart", function(event) {
    STORE.currentQuestion = 0;
    STORE.correct = 0;
    STORE.incorrect = 0
    displayQuestion();
  });
  console.log("restartQuiz is working");
};

function questionCount() {
 STORE.currentQuestion++;
 console.log("questionCount is working")
};


function handleResponse() {
  $('body').on("submit", '#questions', function(event) {
    event.preventDefault();
    let question = STORE.questions[STORE.currentQuestion];
    let response = $("input[name=answers]:checked").val();
    if (!response) {
      alert("Select an answer! You can even guess if you want...");
      return;
    };
    if (response === question.answer) {
      $("#correct").show();
      STORE.correct++;
    }
    else {
      $("#incorrect").show();
      STORE.incorrect++;

    }
    $("#next").show();
    $("#js-submit").hide();
    questionCount();
   /* else {
      console.alert("Please select an option");
    }*/
  });
  console.log("handleResponse is working")
};

function quizCallBack() {
  beginQuiz();
  handleResponse();
  nextQuestion();
  restartQuiz();
  console.log("quizCallBack is working")
};
quizCallBack();