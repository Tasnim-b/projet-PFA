// Get form and input elements
const form = document.querySelector('form');
const firstNameInput = document.getElementById('first-name');
const categoryInputs = document.querySelectorAll('input[name="category"]');
const firstNameError = document.getElementById('first-nameError');
const categoryError = document.getElementById('categoryError');
const emailError = document.getElementById('emailError');
var proRadioButton = document.getElementById("pro");
var partRadioButton = document.getElementById("part");
var emailGroup = document.getElementById("email-group");
var emailInput = document.getElementById("email");
var phoneGroup = document.getElementById("phone-group");
var phoneInput = document.getElementById("phone");
var phoneError = document.getElementById('phoneError');
// Add event listeners to the pro and part radio buttons
proRadioButton.addEventListener("change", function() {
  // If the pro radio button is selected, show the email input field
  if (this.checked) {
    emailGroup.style.display = "block";
  } else {
    // Otherwise, hide the email input field
    emailGroup.style.display = "none";
    emailInput.value = ""; // Clear the email input field value
  }
});

partRadioButton.addEventListener("change", function() {
  // If the part radio button is selected, hide the email input field
  if (this.checked) {
    emailGroup.style.display = "none";
    emailInput.value = ""; // Clear the email input field value
  }
});
// Define validation function--------------------------------------------------------////
const validateForm = () => {
  let isValid = true;

  // Validate first name
  if (firstNameInput.value.trim() === '') {
    isValid = false;
    firstNameError.textContent = 'Please enter your first name';
  } else {
    firstNameError.textContent = '';
  }
  // Validate category
  let selectedCategory = null;
  categoryInputs.forEach((input) => {
    if (input.checked) {
      selectedCategory = input.value;
    }
  });

  if (!selectedCategory) {
    isValid = false;
    categoryError.textContent = 'Please select a category';
  } else {
    categoryError.textContent = '';
  }
  // Validate email if pro category is selected
  if (selectedCategory =='pro') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!(emailRegex.test(emailInput.value)) && (emailInput.value.trim() == '')) {
      isValid = false;
      emailError.textContent ='Please enter a valid email address';
    } else {
      emailError.textContent = '';
    }
  }
  // Add event listener to validate phone number
  const numregex = /^\d{10}$/;
  if (!(numregex.test(phoneInput.value))&&(phoneInput.value.trim() === '')) {
    isValid = false;
    phoneError.textContent = 'Please enter your phone number';
  } else {
    phoneError.textContent ='';
  }
    return isValid;
};
// Handle form submission
form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (validateForm()) {
    alert('Form submitted successfully!');
  }
});

// Handle input focus and blur events
firstNameInput.addEventListener('focus', () => {
  firstNameError.textContent = '';
});

firstNameInput.addEventListener('blur', () => {
  if (firstNameInput.value.trim() === '') {
    firstNameError.textContent = 'Please enter your first name';
  }
});

emailInput.addEventListener('focus', () => {
  emailError.textContent = '';
});

emailInput.addEventListener('blur', () => {
  if (emailInput.value.trim() === '') {
    emailError.textContent = 'Please enter email adress ';
  }
});
phoneInput.addEventListener('focus', () => {
  phoneError.textContent = '';
});

phoneInput.addEventListener('blur', () => {
  if (phoneInput.value.trim() === '') {
    phoneError.textContent = 'Please enter your phone number';
  }
});
categoryInputs.forEach((input) => {
  input.addEventListener('click', () => {
    categoryError.textContent = '';
  });
});
