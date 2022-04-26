// Get the input fields
let password = document.getElementById("fPassword");
let phone = document.getElementById("fPhone");
let firstName = document.getElementById("fName");
let email = document.getElementById("fEmail");
let lastName = document.getElementById("fLastN");
let address = document.getElementById("fAddress");

// Get the error elements
let errorPassword = document.getElementById("errorPassword");
let errorName = document.getElementById("errorName");
let errorPhone = document.getElementById("errorPhone");
let errorEmail = document.getElementById("errorEmail");
let errorLastName = document.getElementById("errorLastN");

// Exercise 6

//pass event argument to "validate()" function to stop form from refreshing after submitting
function validate(event) {
  // Validate fields entered by the user: name, phone, password, email...

  // Prevents reloading the page when submitting
  event.preventDefault(firstName);

  // -- First Name --
  // Check if name is 3 characters long at least & does not contains numbers or special characters
  // RegExp "test()" method --> tests for a match in a string, returns true or false
  if (
    firstName.value.length < 3 ||
    /^[a-z ,.'-]+$/i.test(firstName.value) == false
  ) {
    errorName.classList.add("d-block");
    errorName.classList.add("invalid-feedback");
    firstName.classList.add("border-danger");
  }
  // Hide error message if the above checks have been passed
  if (
    firstName.value.length >= 3 &&
    /^[a-z ,.'-]+$/i.test(firstName.value) == true
  ) {
    errorName.classList.remove("d-block");
    firstName.classList.remove("border-danger");
    firstName.classList.add("border-success");
  }
  // -- Last Name --
  // Check if last name is 3 characters long at least & doesn´t contain numbers or special chars...
  if (
    lastName.value.length < 3 ||
    /^[a-z ,.'-]+$/i.test(lastName.value) == false
  ) {
    errorLastName.classList.add("d-block");
    errorLastName.classList.add("invalid-feedback");
    lastName.classList.add("border-danger");
  }
  // Hide error message if the above checks have been passed
  if (
    lastName.value.length >= 3 &&
    /^[a-z ,.'-]+$/i.test(lastName.value) == true
  ) {
    errorLastName.classList.remove("d-block");
    lastName.classList.remove("border-danger");
    lastName.classList.add("border-success");
  }
  // -- Email --
  // Check for a valid email format, like name@example.com
  if (
    /^(?=[^A-Z\n]*[A-Z])(?=[^a-z\n]*[a-z])(?=[^0-9\n]*[0-9])(?=[^#?!@$%^&*\n-]*[#?!@$%^&*-]).{8,}$/gm.test(
      email.value
    ) == false
  ) {
    errorEmail.classList.add("d-block");
    errorEmail.classList.add("invalid-feedback");
    email.classList.add("border-danger");
  }
  // Hide error message if format is valid
  if (
    /^(?=[^A-Z\n]*[A-Z])(?=[^a-z\n]*[a-z])(?=[^0-9\n]*[0-9])(?=[^#?!@$%^&*\n-]*[#?!@$%^&*-]).{8,}$/gm.test(
      email.value
    ) == true
  ) {
    errorEmail.classList.remove("d-block");
    email.classList.remove("border-danger");
    email.classList.add("border-success");
  }
  // -- Password --
  // Check if it´s 8 characters long, at least 1 letter, 1 number & 1 special character
  if (
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/gm.test(
      password.value
    ) == false
  ) {
    errorPassword.classList.add("d-block");
    errorPassword.classList.add("invalid-feedback");
    password.classList.add("border-danger");
  }
  // Hide error message if format is valid
  if (
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/gm.test(
      password.value
    ) == true
  ) {
    errorPassword.classList.remove("d-block");
    password.classList.remove("border-danger");
    password.classList.add("border-success");
  }
  // -- Phone --
  // Checks if it's 9 digits long
  if (/^\d{9}$/gm.test(phone.value) == false) {
    errorPhone.classList.add("d-block");
    errorPhone.classList.add("invalid-feedback");
    phone.classList.add("border-danger");
  }
  // Hide error message if the above check has been passed
  if (/^\d{9}$/gm.test(phone.value) == true) {
    errorPhone.classList.remove("d-block");
    phone.classList.remove("border-danger");
    phone.classList.add("border-success");
  }
  // -- Address --
  // Check if it's 3 characters long at least
  if (address.value.length < 3) {
    errorAddress.classList.add("d-block");
    errorAddress.classList.add("invalid-feedback");
    address.classList.add("border-danger");
  }
  // Hide error message if above check has been passed
  if (address.value.length >= 3) {
    errorAddress.classList.remove("border-danger");
    errorAddress.classList.remove("d-block");
    address.classList.add("border-success");
  }
}
