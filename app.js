const productContainer = document.getElementById("cards");
const search = document.getElementById("search");
const loadMoreBtn = document.getElementById("loadMore");

let visibleProducts = 4;
let filteredProducts = [...PRODUCTS];

function createCard(product) {
  const media = `
  <img
    class="media"
    loading="lazy"
    src="${product.image}"
    alt="${product.name}">
`;

  return `
    <div class="card">
      ${media}

      <div class="content">
        <div class="name">${product.name}</div>

        <div class="rating">⭐ ${product.rating}</div>

        <div class="desc">${product.description}</div>

        <a class="buy" href="${product.buy}" target="_blank">
          Buy Now
        </a>

        <a class="details" href="product.html?id=${product.id}">
          View Details
        </a>
      </div>
    </div>
  `;
}

function renderProducts() {
  productContainer.innerHTML = "";

  filteredProducts
    .slice(0, visibleProducts)
    .forEach(product => {
      productContainer.innerHTML += createCard(product);
    });

  if (loadMoreBtn) {
    loadMoreBtn.style.display =
      visibleProducts >= filteredProducts.length
        ? "none"
        : "block";
  }
}

search.addEventListener("input", () => {
  const text = search.value.toLowerCase().trim();

  filteredProducts = PRODUCTS.filter(product =>
    product.name.toLowerCase().includes(text) ||
    product.description.toLowerCase().includes(text)
  );

  visibleProducts = 4;
  renderProducts();
});

if (loadMoreBtn) {
  loadMoreBtn.addEventListener("click", () => {
    visibleProducts += 4;
    renderProducts();
  });
}

renderProducts();
