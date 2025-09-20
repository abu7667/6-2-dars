// Menu data — 16 sets
const sets = [
  { name: "Qiyqiriq сет", price: "45 000 сум", img: "https://via.placeholder.com/200x200/e9004d/ffffff?text=Qiyqiriq" },
  { name: "Снек сет", price: "79 000 сум", img: "https://via.placeholder.com/200x200/ff6a99/ffffff?text=Snack" },
  { name: "Классик сет", price: "34 000 сум", img: "https://via.placeholder.com/200x200/ff99cc/ffffff?text=Classic" },
  { name: "Лонгер рингс сет", price: "45 000 сум", img: "https://via.placeholder.com/200x200/e9004d/ffffff?text=Longer" },
  { name: "Биг сет", price: "62 000 сум", img: "https://via.placeholder.com/200x200/ff6a99/ffffff?text=Big" },
  { name: "Лестер сет", price: "53 000 сум", img: "https://via.placeholder.com/200x200/ff99cc/ffffff?text=Lester" },
  { name: "Скул сет", price: "36 000 сум", img: "https://via.placeholder.com/200x200/ff3366/ffffff?text=Scul" },
  { name: "Комбо сет Большой", price: "20 000 сум", img: "https://via.placeholder.com/200x200/ff3366/ffffff?text=Combo" },
  { name: "Do'stlar 1x", price: "43 000 сум", img: "https://via.placeholder.com/200x200/ff6a99/ffffff?text=Dostlar+1x" },
  { name: "Do'stlar 2x", price: "79 000 сум", img: "https://via.placeholder.com/200x200/ff99cc/ffffff?text=Dostlar+2x" },
  { name: "Do'stlar 4x", price: "149 000 сум", img: "https://via.placeholder.com/200x200/e9004d/ffffff?text=Dostlar+4x" },
  { name: "Острый Do'stlar 1x", price: "43 000 сум", img: "https://via.placeholder.com/200x200/ff3366/ffffff?text=Spicy+Dostlar" },
  { name: "Гигантский Бургер", price: "89 000 сум", img: "https://via.placeholder.com/200x200/ff6a99/ffffff?text=Giant+Burger" },
  { name: "Мега Снек", price: "99 000 сум", img: "https://via.placeholder.com/200x200/ff99cc/ffffff?text=Mega+Snack" },
  { name: "Супер Комбо", price: "119 000 сум", img: "https://via.placeholder.com/200x200/e9004d/ffffff?text=Super+Combo" },
  { name: "VIP Фастфуд", price: "199 000 сум", img: "https://via.placeholder.com/200x200/ff3366/ffffff?text=VIP" }
];

// Render all sets
function renderSets() {
  const container = document.getElementById('setsGrid');
  container.innerHTML = sets.map(set => `
    <div class="set-card">
      <img src="${set.img}" alt="${set.name}" />
      <div class="set-name">${set.name}</div>
      <div class="set-price">${set.price}</div>
      <button class="add-btn" onclick="addToCart('${set.name}', ${set.price.replace(/\s/g, '')})">+</button>
    </div>
  `).join('');
}

// Add to cart
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`✅ "${name}" добавлен в корзину!`);
}

// Initialize
renderSets();