const fetchCategories = async () => {
  const url = `https://openapi.programming-hero.com/api/news/categories`;
  const res = await fetch(url);
  const data = await res.json();
  showCategories(data.data);
};

const showCategories = (data) => {
  console.log(data);
  const categoryContainer = document.getElementById("categories-container");
  data.news_category.forEach((category) => {
    categoryContainer.innerHTML += ` <a class="nav-link" href="#">${category.category_name}</a>`;
  });
};
