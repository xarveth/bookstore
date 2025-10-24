// Registration validation
function validateRegistration() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mob = document.getElementById("mob").value.trim();
    let password = document.getElementById("password").value.trim();

    let nameRegex = /^[A-Za-z\s]{6,}$/;
    if (!nameRegex.test(name)) {
        alert("Name must contain only alphabets and be at least 6 characters long.");
        return false;
    }

    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address (e.g., name@gmail.com).");
        return false;
    }

    let mobRegex = /^\d{10}$/;
    if (!mobRegex.test(mob)) {
        alert("Mobile number must contain exactly 10 digits.");
        return false;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return false;
    }

    alert("Registration Successful!");
    return true;
}

// Cart functionality
let cart = JSON.parse(localStorage.getItem("cart") || "[]");
let total = parseInt(localStorage.getItem("total") || "0");

function addToCart(book, price) {
  cart.push({ book, price });
  total += price;
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("total", total);
  alert(`${book} added to cart!`);
}

function updateCart() {
  const list = document.getElementById("cartList");
  const totalEl = document.getElementById("totalAmount");
  if (!list || !totalEl) return;
  list.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.book} - ₹${item.price}`;
    list.appendChild(li);
  });
  totalEl.textContent = total;
}

function checkout() {
  if(cart.length === 0){
    alert("Cart is empty!");
    return;
  }
  alert("Order placed successfully!");
  cart = [];
  total = 0;
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("total", total);
  updateCart();
}

window.onload = function() {
  updateCart();
};