const correctAnswer = true;
const question = document.querySelector(".question");
question.textContent = "Ist Deutschland in der EU?";
const yesButton = document.querySelector(".yes");
yesButton.onclick = function () {
  if (correctAnswer === true) {
    alert("Richtig");
  } else {
    alert("Falsch");
  }
};
const noButton = document.querySelector(".no");
noButton.onclick = function () {
  if (correctAnswer === false) {
    alert("Richtig");
  } else {
    alert("Falsch");
  }
};
