const quizContainer = document.getElementById('quiz-container');
const retryBtn = document.getElementById('retry-btn');

const questions = [
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5"],
    answer: 1,
  },
  {
    question: "Capital of France?",
    options: ["Berlin", "London", "Paris"],
    answer: 2,
  },
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const q = questions[currentQuestion];
  quizContainer.innerHTML = `<h2>${q.question}</h2>`;
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.onclick = () => selectAnswer(i);
    quizContainer.appendChild(btn);
  });
}

function selectAnswer(selected) {
  if (selected === questions[currentQuestion].answer) score++;
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  quizContainer.innerHTML = `<h2>Your score: ${score} / ${questions.length}</h2>`;
  retryBtn.style.display = 'inline-block';
}

retryBtn.onclick = () => {
  currentQuestion = 0;
  score = 0;
  retryBtn.style.display = 'none';
  showQuestion();
}

showQuestion();
