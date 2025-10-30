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
