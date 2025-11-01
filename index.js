const nameEl = document.getElementById("name-el");
const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", function () {
  localStorage.setItem("name", nameEl.value);
  window.location.href = "index2.html";
});

const questions = [
  "1) Which is the largest continent in the world?",
  `2) Which country is known as the "Land of the Rising Sun"?`,
  "3) What is the capital city of Canada?",
  "4) Which planet has the most moons in our solar system (as of 2025)?",
  "5) Who was the first person to reach the South Pole?",
];

const options = [
  "a. Asia\nb. North America\nc. Europe\nd. Antarctica",
  "a. China\nb. South Korea\nc. India\nd. Japan",
  "a. Vancouver\nb. Ottawa\nc. Calgary\nd. Toronto",
  "a. Saturn\nb. Jupiter\nc. Earth\nd. Mercury",
  "a. Helmer Hanssen\nb. Oscar Wisting\nc. Roald Amundsen\nd. Sverre Hassel",
];

const answers = ["a", "d", "b", "a", "c"];

const startBtn = document.getElementById("start-btn");

startBtn.addEventListener("click", function () {
  window.location.href = "questions.html";
});
