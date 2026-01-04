// Greeting + Date
const greeting = document.getElementById("greeting");
const dateText = document.getElementById("date");

if (greeting && dateText) {
  const now = new Date();
  const hour = now.getHours();

  let message = "Good Evening";
  if (hour < 12) message = "Good Morning";
  else if (hour < 18) message = "Good Afternoon";

  greeting.textContent = message + " 👋 Welcome to Sweet Crumbs Bakery";
  dateText.textContent = now.toDateString();
}

// Theme Toggle
const toggleBtn = document.getElementById("themeToggle");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}
let cart = 0;

function addToCart() {
  cart++;
  document.getElementById("cartCount").textContent = cart;
}
function validateForm() {
  const email = document.getElementById("email").value;
  if (!email.includes("@")) {
    alert("Invalid email address!");
    return false;
  }
  alert("Message sent!");
  return true;
}