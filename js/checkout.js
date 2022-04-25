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
function validate(e) {
  // Validate fields entered by the user: name, phone, password, and email
 
  // First Name
    // Check if it is three characters long
    if (firstName.value.length < 3) {
      errorName.classList.add('d-block');
      errorName.classList.add('invalid-feedback');
      errorName.innerHTML = 'Please, enter a name 3 characters long at least.';
      firstName.classList.add('border-danger')
    }
    // Check if it contains numbers 
    if (firstName.value.match(/\d+/g) != null) {
        errorName.classList.add('d-block');
        errorName.classList.add('invalid-feedback');
        firstName.classList.add('border-danger');
        errorName.innerHTML = "Numbers not allowed."
    }
    // Hide the error message if the above checks have been passed
    if (firstName.value.length >= 3 && firstName.value.match(/\d+/g) == null) {
            errorName.classList.remove('d-block')
            firstName.classList.remove('border-danger');
        }
    }
  
}
