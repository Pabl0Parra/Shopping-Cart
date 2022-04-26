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

//pass event argument to validate() to stop form from refreshing after submitting
function validate(event) {
  // Validate fields entered by the user: name, phone, password, and email

  // Prevents reloading the page when submitting
  event.preventDefault(firstName)

  // First Name
    // Check if it is long enough
    if (firstName.value.length < 3) {
      errorName.classList.add('d-block');
      errorName.classList.add('invalid-feedback');
      firstName.classList.add('border-danger')
    }
    // Check if it contains numbers 
    if (firstName.value.match(/\d+/g) != null) {
      errorName.classList.add('d-block');
      errorName.classList.add('invalid-feedback');
      firstName.classList.add('border-danger');
      
    }
    // Hide error message if the above checks have been passed
    if (firstName.value.length >= 3 && firstName.value.match(/\d+/g) == null) {
      errorName.classList.remove('d-block')
      firstName.classList.remove('border-danger');        
    } 

  // Last Name
    // Check if the last name is long enough
    if (lastName.value.length < 3) {
      errorLastName.classList.add('d-block');
      errorLastName.classList.add('invalid-feedback');
      lastName.classList.add('border-danger')
    }
    // Check if it contains numbers 
    if (lastName.value.match(/\d+/g) != null) {
      errorLastName.classList.add('d-block');
      errorLastName.classList.add('invalid-feedback');
      errorLastName.classList.add('border-danger');
      
    }
    // Hide error message if the above checks have been passed
    if (lastName.value.length >= 3 && lastName.value.match(/\d+/g) == null) {
      errorLastName.classList.remove('d-block')
      errorLastName.classList.remove('border-danger'); 
    }

  // Email
    // Check if the format is a valid email format
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value) == false) {
      errorEmail.classList.add('d-block');
      errorEmail.classList.add('invalid-feedback');
      errorEmail.classList.add('border-danger');
    }
    // Hide error message if format is valid 
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
      errorEmail.classList.remove('d-block')
      errorEmail.classList.remove('border-danger');     
    }

  // Password
    // Check if it´s 3 characters long at least
    if (password.value.length < 3) {
      errorPassword.classList.add('d-block');
      errorPassword.classList.add('invalid-feedback');
      errorPassword.classList.add('border-danger');      
    }
    // Check if it contains letters
    if (password.value.match(/[A-Za-z]/g) != null) {
      errorPassword.classList.add('d-block');
      errorPassword.classList.add('invalid-feedback');
      password.classList.add('border-danger');      
    }
    // Check if it contains numbers
    if (password.value.match(/\d+/g) != null) {
      errorPassword.classList.add('d-block');
      errorPassword.classList.add('invalid-feedback');
      password.classList.add('border-danger');
      
    }
    // Hide error message if the password passes all of the above checks
    if ((password.value.length >= 3) && (password.value.match(/[A-Za-z]/g) !== null) && (password.value.match(/\d+/g) !== null)) {
      password.classList.remove('border-danger');
      errorPassword.classList.remove('d-block');      
    } 

  // Phone
    // Checks if length is ok
    if (phone.value.length < 3) {
      errorPhone.classList.add('d-block');
      errorPhone.classList.add('invalid-feedback');
      phone.classList.add('border-danger');
    }    
  // Hide error message if the above check has been passed
    if (phone.value.length >= 3) {
      phone.classList.remove('border-danger');
      errorPhone.classList.remove('d-block');
    }
      
  // Address
    // Check if it's 3 characters long at least
    if (address.value.length < 3) {
      errorAddress.classList.add('d-block')
      errorAddress.classList.add('invalid-feedback')
      address.classList.add('border-danger')
      
    }
    // Hide error message if above check has been passed
    if (address.value.length >= 3) {
      errorAddress.classList.remove('border-danger');
      errorAddress.classList.remove('d-block');
    }  
}
