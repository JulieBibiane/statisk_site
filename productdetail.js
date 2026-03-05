const params = new URLSearchParams(window.location.search);
const productId = params.get("id");
const container = document.getElementById("product-details-container");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((res) => res.json())
  .then((data) => {
    const product = Array.isArray(data) ? data[0] : data;

    document.title = product.productdisplayname + " – FashinRUs";
    container.innerHTML = `
      <div class="product-image">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}" />
      </div>
      <div class="product-details">
        <h1>${product.productdisplayname}</h1>
        <p class="brand">${product.brandname}</p>
        <div class="price-wrapper">
          ${
            product.discount
              ? `<span class="old-price">${product.price} kr</span>
               <span class="new-price">${Math.round(product.price * (1 - product.discount / 100))} kr</span>`
              : `<span class="new-price">${product.price} kr</span>`
          }
        </div>
        <p class="stock ${product.soldout === 0 ? "in-stock" : "out-of-stock"}">
          ${product.soldout === 0 ? "På lager" : "Udsolgt"}
        </p>
        <button class="add-to-cart">Læg i kurv</button>
      </div>
    `;
  });
