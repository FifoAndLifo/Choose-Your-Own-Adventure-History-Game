function {
const btn = document.getElementById('toggleBtn');
const out = document.getElementById('output');

btn.addEventListener('click', () => {
  if (out.style.display === "none") {
    out.style.display = "block";
    btn.textContent = "Hide Details";
  } else {
    out.style.display = "none";
    btn.textContent = "Show Details";
  }
});
}