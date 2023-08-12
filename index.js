const toggleBar = document.getElementById("toggleBar");
const closeMenu = document.getElementById("closeMenu");
const hidden = document.getElementById("hidden");

toggleBar.addEventListener("click", () => {
  hidden.classList.toggle("hidden");
});
closeMenu.addEventListener("click", () => {
  hidden.classList.toggle("hidden");
});
