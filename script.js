const questions = [
  { 
    q: "Which driver is tied with Michael Schumacher for the most F1 World Championships?",
    options: ["Lewis Hamilton", "Ayrton Senna", "Sebastian Vettel", "Fernando Alonso"],
    answer: 0
  },

  { q: "Which team is known as the Scuderia?",
    options: ["Mercedes", "Ferrari", "McLaren", "Red Bull"],
    answer: 1 },

  { q: "Which country hosts in the Silverstone circuit?",
    options: ["France", "Italy", "Spain", "Britian"],
    answer: 3 },

  { q: "Who won the 2023 Formula 1 Drivers’ Championship?",
    options: ["Lewis Hamilton", "Charles Leclerc", "Max Verstappen", "Lando Norris"],
    answer: 2 },

  { q: "What does DRS stand for in Formula 1?",
    options: ["Drag Reduction System", "Drive Ratio Setup", "Downforce Racing System", "Dynamic Rear Speed"],
    answer: 0 },

  { q: "Which F1 driver is nicknamed ‘The Iceman’?",
    options: ["Kimi Räikkönen", "Fernando Alonso", "Valtteri Bottas", "Nico Rosberg"],
    answer: 0 },

  { q: "Which team dominated the early 2010s with Adrian Newey designs?",
    options: ["Ferrari", "Red Bull Racing", "Renault", "Williams"],
    answer: 1 },

  { q: "Which race is called ‘The Jewel in the Crown’ of F1?",
    options: ["British GP", "Italian GP", "Monaco GP", "Belgian GP"],
    answer: 2 },

  { q: "Which tire supplier is currently used in Formula 1?",
    options: ["Pirelli", "Bridgestone", "Michelin", "Goodyear"],
    answer: 0 },

  { q: "Which team did Ayrton Senna win most of his titles with?",
    options: ["Lotus", "Williams", "McLaren", "Ferrari"],
    answer: 2 },

  { q: "What flag signals the end of the race?",
    options: ["Yellow", "Red", "Green", "Chequered Flag"],
    answer: 3 },

  { q: "Which circuit is famous for the ‘Eau Rouge’ corner?",
    options: ["Silverstone", "Monza", "Spa-Francorchamps", "Suzuka"],
    answer: 2 },

  { q: "Who is the youngest driver to start an F1 race?",
    options: ["Lando Norris", "Oscar Piastri", "Max Verstappen", "Yuki Tsunoda"],
    answer: 2 },

  { q: "Which engine layout is currently used in F1?",
    options: ["V8", "V10", "Hybrid V6 Turbo", "V12"],
    answer: 2 },

  { q: "Which team is based in Brackley, United Kingdom?",
    options: ["Aston Martin", "Mercedes AMG Petronas", "Red Bull Racing", "AlphaTauri"],
    answer: 1 }
];

let currentIndex = 0;
let score = 0;
let selectedOption = null;

const startBox = document.getElementById("startBox");
const quizBox = document.getElementById("quizBox");
const resultBox = document.getElementById("resultBox");
const questionText = document.getElementById("questionText");
const optionsBox = document.getElementById("optionsBox");
const finalScore = document.getElementById("finalScore");

function startQuiz() {
  startBox.style.display = "none";
  quizBox.style.display = "block";
  loadQuestion();
}

function loadQuestion() {
  const q = questions[currentIndex];
  questionText.textContent = `${currentIndex + 1}. ${q.q}`;
  optionsBox.innerHTML = "";
  selectedOption = null;

  q.options.forEach((opt, i) => {
    const div = document.createElement("div");
    div.className = "option";
    div.textContent = opt;
    div.onclick = () => selectOption(div, i);
    optionsBox.appendChild(div);
  });
}

function selectOption(element, index) {
  Array.from(optionsBox.children).forEach(opt =>
    opt.classList.remove("selected")
  );

  element.classList.add("selected");
  selectedOption = index;
}

function nextQuestion() {
  if (selectedOption === null) return;

  if (selectedOption === questions[currentIndex].answer) {
    score++;
  }

  currentIndex++;

  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  quizBox.style.display = "none";
  resultBox.style.display = "block";
  finalScore.textContent = `Your Score: ${score} / ${questions.length}`;
}