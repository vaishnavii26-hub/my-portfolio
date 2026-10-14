const btn = document.getElementById("themeBtn");

// Remember the theme the visitor chose
try {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
} catch (e) {}

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  try {
    const mode = document.body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", mode);
  } catch (e) {}
});