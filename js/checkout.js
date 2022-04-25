// Get the input fields
let password = document.getElementById("fPassword");
let phone = document.getElementById("fPhone");
let name = document.getElementById("fName");
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
function validate() {
  // Validate fields entered by the user: name, phone, password, and email

  //Declare all fields to be tested with regular expressions
  const REGEX_NAME = /[0-9]/;
  const IS_OK_NAME = REGEX_NAME.test(fName.value);

  const REGEX_LAST = /[0-9]/;
  const IS_OK_LAST = REGEX_LAST.test(fLastN.value);

  const REGEX_EMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  const IS_OK_EMAIL = REGEX_EMAIL.test(fEmail.value);

  const REGEX_PASSWORD = /^(?=[A-Za-z]+[0-9]|[0-9]+[A-Za-z])[A-Za-z0-9]{3,10}$/;
  const IS_OK_PASSWORD = REGEX_PASSWORD.test(fPassword.value);
}
