const questionList = [
  "Ist Deutschland in der EU?",
  "Hat Deutschland unter 70.000.000 Einwohner?",
  "Deutschland hat 19 Bundesländer",
];
const answers = [true, false, false];
let questionIndex = 0;
let correctAnswer = answers[questionIndex];
const myQuestion = document.querySelector(".question");
myQuestion.textContent = questionList[0];
updateProgress();
const yesButton = document.querySelector(".yes");
yesButton.onclick = function () {
  if (correctAnswer === true) {
    showAnswerIsCorrect();
  } else {
    showAnswerIsIncorrect();
  }
};
const noButton = document.querySelector(".no");
noButton.onclick = function () {
  if (correctAnswer === false) {
    showAnswerIsCorrect();
  } else {
    showAnswerIsIncorrect();
  }
};

function showAnswerIsCorrect() {
  const newParagraphforYes = document.createElement("p");
  newParagraphforYes.className = "correct";
  newParagraphforYes.textContent = "Das ist korekt! :) ";
  document.body.appendChild(newParagraphforYes);
  setTimeout(newQuestion, 1200);
}

function showAnswerIsIncorrect() {
  const newParagraphforNo = document.createElement("p");
  newParagraphforNo.className = "incorrect";
  newParagraphforNo.textContent = "Leider falsch :(";
  document.body.appendChild(newParagraphforNo);
  yesButton.disabled = true;
  noButton.disabled = true;
}

function newQuestion() {
  questionIndex += 1;
  if (questionIndex < questionList.length) {
    myQuestion.textContent = questionList[questionIndex];
    correctAnswer = false;
    document.body.removeChild(document.querySelector(".correct"));
    updateProgress();
  } else {
    endQuiz();
  }
}

function updateProgress() {
  const progressElement = document.querySelector(".progress");
  progressElement.textContent = `Frage ${questionIndex + 1}/${
    questionList.length
  }`;
}

function endQuiz() {
  document.body.removeChild(document.querySelector(".correct"));
  document.body.removeChild(document.querySelector(".question-container"));
  const finishMessage = document.createElement("p");
  finishMessage.textContent = "Super, du hast alle Fragen richtig beantwortet!";
  document.body.appendChild(finishMessage);
}
