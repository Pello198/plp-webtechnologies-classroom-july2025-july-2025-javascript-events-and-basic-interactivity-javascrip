/* === Theme Toggle === */
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    themeToggle.textContent = "Switch to Light Mode";
  } else {
    themeToggle.textContent = "Switch to Dark Mode";
  }
});

/* === Counter === */
const counterValue = document.getElementById("counterValue");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
let counter = 0;

increaseBtn.addEventListener("click", () => {
  counter++;
  counterValue.textContent = counter;
});
decreaseBtn.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    counterValue.textContent = counter;
  }
});

resetBtn.addEventListener("click", () => {
  counter = 0;
  counterValue.textContent = counter;
});

/* === FAQ Section Toggle === */
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((q) => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    answer.style.display =
      answer.style.display === "block" ? "none" : "block";
  });
});

// form validation
const userForm = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const submitBtn = document.getElementById("submitBtn");
const formSuccess = document.getElementById("formSuccess");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

// Step 1: Validate Name
nameInput.addEventListener("blur", () => {
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required";
    emailInput.disabled = true;
  } else {
    nameError.textContent = "";
    emailInput.disabled = false;
  }
});

// Step 2: Validate Email
emailInput.addEventListener("blur", () => {
  if (!emailInput.value.includes("@")) {
    emailError.textContent = "Enter a valid email";
    passwordInput.disabled = true;
  } else {
    emailError.textContent = "";
    passwordInput.disabled = false;
  }
});

// Step 3: Validate Password
passwordInput.addEventListener("blur", () => {
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    confirmPasswordInput.disabled = true;
  } else {
    passwordError.textContent = "";
    confirmPasswordInput.disabled = false;
  }
});

// Step 4: Confirm Password
confirmPasswordInput.addEventListener("blur", () => {
  if (confirmPasswordInput.value !== passwordInput.value) {
    confirmPasswordError.textContent = "Passwords do not match";
    submitBtn.disabled = true;
  } else {
    confirmPasswordError.textContent = "";
    submitBtn.disabled = false;
  }
});

// Final submission
userForm.addEventListener("submit", (e) => {
  e.preventDefault();
  formSuccess.style.display = "block";
  userForm.reset();

  // Reset form to first step
  emailInput.disabled = true;
  passwordInput.disabled = true;
  confirmPasswordInput.disabled = true;
  submitBtn.disabled = true;
});
