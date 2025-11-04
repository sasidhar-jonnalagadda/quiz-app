const quizData = [
  {
    question: "1) Which is the largest continent in the world?",
    options: ["Asia", "North America", "Europe", "Antarctica"],
    answer: "a",
  },
  {
    question: `2) Which country is known as the "Land of the Rising Sun"?`,
    options: ["China", "South Korea", "India", "Japan"],
    answer: "d",
  },
  {
    question: "3) What is the capital city of Canada?",
    options: ["Vancouver", "Ottawa", "Calgary", "Toronto"],
    answer: "b",
  },
  {
    question:
      "4) Which planet has the most moons in our solar system (as of 2025)?",
    options: ["Saturn", "Jupiter", "Earth", "Mercury"],
    answer: "a",
  },
  {
    question: "5) Who was the first person to reach the South Pole?",
    options: [
      "Helmer Hanssen",
      "Oscar Wisting",
      "Roald Amundsen",
      "Sverre Hassel",
    ],
    answer: "c",
  },
];

const questionEl = document.getElementById("question-el");
const optionsEl = document.getElementById("options-el");
const choiceEl = document.getElementById("choice-input");
const nextBtn = document.getElementById("next-btn");

let curr_index = 0;
let score = 0;

function show_question() {
  if (curr_index >= quizData.length) {
    document.body.innerHTML = `<h1>Quiz finished!</h1><h2>Your final score is: ${score}</h2>`;
    return;
  }

  const curr_question = quizData[curr_index].question;
  questionEl.textContent = curr_question;

  optionsEl.innerHTML = "";
  optionsEl.innerHTML += `<p>a) ${quizData[curr_index].options[0]}</p>`;
  optionsEl.innerHTML += `<p>a) ${quizData[curr_index].options[1]}</p>`;
  optionsEl.innerHTML += `<p>a) ${quizData[curr_index].options[2]}</p>`;
  optionsEl.innerHTML += `<p>a) ${quizData[curr_index].options[3]}</p>`;

  choiceEl.value = "";
}
