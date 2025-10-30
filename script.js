// script.js — shared by catalogue.html and cart.html

// Load existing cart or create new
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add item to cart (with quantity support)
function addToCart(book, price) {
  const existing = cart.find(item => item.book === book);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ book, price, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${book} added to cart!`);
}

// Update cart display in cart.html
function updateCart() {
  const list = document.getElementById("cartList");
  const totalEl = document.getElementById("totalAmount");
  if (!list || !totalEl) return;

  list.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.book} - ₹${item.price} × ${item.quantity}`;
    list.appendChild(li);
    total += item.price * item.quantity;
  });

  totalEl.textContent = total.toFixed(2);
}

// Checkout process
function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  alert("Thank you for your purchase!");
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}

// Auto-run on cart page
window.onload = updateCart;
