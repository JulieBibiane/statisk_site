const params = new URLSearchParams(window.location.search);
const categoryId = params.get("category");
const container = document.getElementById("product-list-container");

fetch(`https://kea-alt-del.dk/t7/api/products?category=${categoryId}`)
  .then((res) => res.json())
  .then((products) => {
    products.forEach((product) => {
      const a = document.createElement("a");
      a.href = `productdetail.html?id=${product.id}`;
      a.classList.add("product-card");
      a.innerHTML = `
        <div class="image-wrapper ${product.soldout === 1 ? "udsolgt" : ""}">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}" />
          ${product.discount ? '<span class="badge sale">Tilbud</span>' : ""}
          ${product.soldout === 1 ? '<span class="badge soldout">Udsolgt</span>' : ""}
        </div>
        <div class="product-info">
          <h3>${product.productdisplayname}</h3>
          <p class="brand">${product.brandname}</p>
          <p class="price">${product.price} kr</p>
        </div>
      `;
      container.appendChild(a);
    });
  });
