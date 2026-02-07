// THEME TOGGLE
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
});

// RENDER MODE SWITCH
const modes = document.querySelectorAll(".mode");
modes.forEach(mode => {
  mode.addEventListener("click", () => {
    modes.forEach(m => m.classList.remove("active"));
    mode.classList.add("active");
  });
});

// ANIMATE PROGRESS BAR
window.addEventListener("load", () => {
  const progress = document.querySelector(".progress");
  setTimeout(() => {
    progress.style.width = "100%";
  }, 300);
});

// ANIMATE PERFORMANCE RING
const score = 85;
const circle = document.querySelector(".ring-progress");
const scoreText = document.querySelector(".score-text");
const radius = 50;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = circumference;

const offset = circumference - (score / 100) * circumference;

setTimeout(() => {
  circle.style.strokeDashoffset = offset;
}, 500);

// Dynamic color
if (score >= 80) {
  circle.style.stroke = "#34d399"; // green
} else if (score >= 55) {
  circle.style.stroke = "#ffb020"; // warm yellow
} else {
  circle.style.stroke = "#ff6b6b"; // soft red
}

scoreText.textContent = score;
const gridToggle = document.querySelector(".viewport-overlay input");

gridToggle.addEventListener("change", (e) => {
  document.querySelector(".canvas-placeholder")
    .classList.toggle("hide-grid", !e.target.checked);
});
