const nameEl = document.getElementById("name-el");
const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", function () {
  localStorage.setItem("name", nameEl.value);
  window.location.href = "index2.html";
});
