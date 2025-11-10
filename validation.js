function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var password = document.getElementById("password").value;

  if (name.length < 6) {
    alert("Name must be at least 6 characters");
    return false;
  }

  if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
    alert("Invalid email address");
    return false;
  }

  if (phone.length != 10) {
    alert("Phone number must be exactly 10 digits");
    return false;
  }

  if (password.length < 8) {
    alert("Password must be at least 8 characters long");
    return false;
  }

  alert("Registration Successful!");
  return true;
}
