const productContainer = document.getElementById("cards");
const search = document.getElementById("search");
const loadMoreBtn = document.getElementById("loadMore");

const cardsPerPage = 4;
let currentPage = 0;
let filteredProducts = [...PRODUCTS];

function createCard(product) {
  return `
    <div class="card">
      <img class="media" loading="lazy" src="${product.image}" alt="${product.name}">

      <div class="content">
        <div class="name">${product.name}</div>
        <div class="rating">⭐ ${product.rating}</div>
        <div class="desc">${product.description}</div>

        <a class="buy" href="${product.buy}" target="_blank">Buy Now</a>

        <a class="details" href="${product.page}">View Details</a>
      </div>
    </div>
  `;
}

function renderProducts() {
  productContainer.innerHTML = "";

  const start = currentPage * cardsPerPage;
  const end = start + cardsPerPage;

  filteredProducts.slice(start, end).forEach(product => {
    productContainer.innerHTML += createCard(product);
  });

  if (loadMoreBtn) {
    loadMoreBtn.textContent =
      end >= filteredProducts.length ? "Start Again" : "Next";
  }
}

search.addEventListener("input", () => {
  const text = search.value.toLowerCase().trim();

  filteredProducts = PRODUCTS.filter(product =>
    product.name.toLowerCase().includes(text) ||
    product.description.toLowerCase().includes(text)
  );

  currentPage = 0;
  renderProducts();
});

loadMoreBtn.addEventListener("click", () => {
  currentPage++;

  if (currentPage * cardsPerPage >= filteredProducts.length) {
    currentPage = 0;
  }

  renderProducts();
});

renderProducts();
