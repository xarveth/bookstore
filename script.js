function addToCart(book, price) {
  var cart = localStorage.getItem("cart");
  if (cart == null) {
    cart = [];
  } else {
    cart = JSON.parse(cart);
  }
  cart.push({book: book, price: price});
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(book + " added to cart!");
}

function showCart() {
  var cart = localStorage.getItem("cart");
  var list = document.getElementById("list");
  var total = 0;

  if (cart == null || cart == "[]") {
    list.innerHTML = "<li>Your cart is empty</li>";
    document.getElementById("total").innerHTML = "0";
    return;
  }

  cart = JSON.parse(cart);
  list.innerHTML = "";

  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    list.innerHTML += "<li style='margin:10px 0;padding:8px;border-bottom:1px solid #e9ecef'>" + item.book + " - ₹" + item.price + "</li>";
    total = total + item.price;
  }

  document.getElementById("total").innerHTML = total;
}

function placeOrder() {
  var cart = localStorage.getItem("cart");
  if (cart == null || cart == "[]") {
    alert("Cart is empty!");
    return;
  }
  alert("Order placed successfully!");
  localStorage.setItem("cart", "[]");
  showCart();
}
