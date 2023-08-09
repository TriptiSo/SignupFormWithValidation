document.getElementById("signupForm").addEventListener("submit", function (event) {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var birthdate = document.getElementById("birthdate").value;
    var password = document.getElementById("password").value;
  
    var valid = true;
  
    if (firstName === "") {
      document.getElementById("firstNameError").textContent = "First name is required";
      valid = false;
    } else {
      document.getElementById("firstNameError").textContent = "";
    }
  
    if (lastName === "") {
      document.getElementById("lastNameError").textContent = "Last name is required";
      valid = false;
    } else {
      document.getElementById("lastNameError").textContent = "";
    }
  
    if (!email.match(/^\S+@\S+\.\S+$/)) {
      document.getElementById("emailError").textContent = "Invalid email address";
      valid = false;
    } else {
      document.getElementById("emailError").textContent = "";
    }
  
    if (!mobile.match(/^\d{10}$/)) {
      document.getElementById("mobileError").textContent = "Mobile number must be 10 digits";
      valid = false;
    } else {
      document.getElementById("mobileError").textContent = "";
    }
  
    if (!gender) {
      document.getElementById("genderError").textContent = "Please select a gender";
      valid = false;
    } else {
      document.getElementById("genderError").textContent = "";
    }
  
    if (!birthdate) {
      document.getElementById("birthdateError").textContent = "Birth date is required";
      valid = false;
    } else {
      document.getElementById("birthdateError").textContent = "";
    }
  
    if (password === "") {
      document.getElementById("passwordError").textContent = "Password is required";
      valid = false;
    } else {
      document.getElementById("passwordError").textContent = "";
    }
  
    if (!valid) {
      event.preventDefault();
    }
  });
  