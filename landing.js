// Toggle Menu
const menuIcon = document.querySelector(".ri-menu-3-line");
const navLinks = document.querySelector("#nav-1");
menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Fake Search Popup
const searchIcon = document.querySelector(".ri-search-line");
searchIcon.addEventListener("click", () => {
  let searchQuery = prompt("Search Nike Products:");
  if (searchQuery) {
    alert(`You searched for: ${searchQuery}`);
  }
});

// Fake Cart
const cartIcon = document.querySelector(".ri-shopping-cart-line");
let cartCount = 0;
cartIcon.addEventListener("click", () => {
  cartCount++;
  alert(`🛒 Items in your cart: ${cartCount}`);
});

// Highlight menu on scroll (optional)
window.addEventListener("scroll", () => {
  document.querySelector("#nav").style.background =
    window.scrollY > 50 ? "#fff" : "transparent";
});
