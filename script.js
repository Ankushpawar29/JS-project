
console.log("JS file linked correctly!");

const title = document.getElementById("mainTitle");
title.textContent = "My Internship JS Project";

const thumbnails = document.querySelectorAll(".thumb");
thumbnails.forEach(img => {
  img.addEventListener("click", () => {
    alert("You clicked image: " + img.alt);
  });
});

const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

function validateName() {
  if (nameInput.value.trim().length < 3) {
    nameError.textContent = "Name must be at least 3 characters.";
    return false;
  }
  nameError.textContent = "";
  return true;
}

function validateEmail() {
  if (!emailInput.value.includes("@")) {
    emailError.textContent = "Please enter a valid email.";
    return false;
  }
  emailError.textContent = "";
  return true;
}

function validateMessage() {
  if (messageInput.value.trim() === "") {
    messageError.textContent = "Message cannot be empty.";
    return false;
  }
  messageError.textContent = "";
  return true;
}

nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
messageInput.addEventListener("input", validateMessage);

form.addEventListener("submit", function (e) {
  const ok =
    validateName() && validateEmail() && validateMessage();
  if (!ok) {
    e.preventDefault();
  } else {
    alert("Form submitted!");
  }
});

const themeToggle = document.getElementById("themeToggle");
const body = document.body;

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark");
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  const mode = body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", mode);
});
