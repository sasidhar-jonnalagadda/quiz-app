const nameEl = document.getElementById("name-el");
const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", function () {
  localStorage.setItem("name", nameEl.value);
  window.location.href = "index2.html";
});

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

const startBtn = document.getElementById("start-btn");

let questionEl = document.getElementById("question-el");
let optionsEl = document.getElementById("options-el");

startBtn.addEventListener("click", function () {
  window.location.href = "questions.html";
});
