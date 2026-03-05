const container = document.getElementById("categories-container");

fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((res) => res.json())
  .then((categories) => {
    categories.forEach((cat) => {
      const a = document.createElement("a");
      a.href = `productlist.html?category=${cat.category}`;
      a.classList.add("card");
      a.textContent = cat.category;
      container.appendChild(a);
    });
  });
