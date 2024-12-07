const questionElement = document.getElementById("question");
const answerInput = document.getElementById("answer-input");
const submitButton = document.getElementById("submit-button");
const nextQuestionButton = document.getElementById("next-question-button");
const feedbackElement = document.getElementById("feedback");
const scoreElement = document.getElementById("score");

let score = 0;
let currentQuestion = { num1: 0, num2: 0 };

// Generate a random multiplication question
function generateQuestion() {
  const num1 = Math.floor(Math.random() * 10) + 1; // Random number from 1 to 10
  const num2 = Math.floor(Math.random() * 10) + 1; // Random number from 1 to 10
  currentQuestion = { num1, num2 };
  questionElement.textContent = `What is ${num1} x ${num2}?`;
  answerInput.value = "";
  feedbackElement.textContent = "";
  nextQuestionButton.disabled = true;
  answerInput.focus();
}

// Check the answer
function checkAnswer() {
  const userAnswer = parseInt(answerInput.value);
  const correctAnswer = currentQuestion.num1 * currentQuestion.num2;

  if (userAnswer === correctAnswer) {
    feedbackElement.textContent = "Correct! 🎉";
    feedbackElement.style.color = "green";
    score++;
    scoreElement.textContent = score;
    
  } else {
    feedbackElement.textContent = `Wrong! The correct answer is ${correctAnswer}.`;
    feedbackElement.style.color = "red";
  }

  nextQuestionButton.disabled = false;
}

// Event listeners
submitButton.addEventListener("click", () => {
  if (answerInput.value.trim() !== "") {
    checkAnswer();
  }
});

nextQuestionButton.addEventListener("click", () => {
  generateQuestion();
});

// Start the first question
generateQuestion();
