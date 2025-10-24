function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value.trim();

  const namePattern = /^[A-Za-z ]{6,}$/;
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const phonePattern = /^[0-9]{10}$/;

  if (!namePattern.test(name)) {
    alert("Name must be at least 6 alphabetic characters.");
    return false;
  }

  if (!emailPattern.test(email)) {
    alert("Invalid email address.");
    return false;
  }

  if (!phonePattern.test(phone)) {
    alert("Phone number must be exactly 10 digits.");
    return false;
  }

  if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    return false;
  }

  alert("Registration Successful!");
  return true;
}