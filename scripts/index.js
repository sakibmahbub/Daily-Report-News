const fetchCategories = async () => {
  const url = `https://openapi.programming-hero.com/api/news/categories`;
  const res = await fetch(url);
  const data = await res.json();
  showCategories(data.data);
};

const showCategories = (data) => {
  const categoryContainer = document.getElementById("categories-container");
  data.news_category.forEach((category) => {
    categoryContainer.innerHTML += ` <a class="nav-link" href="#" onclick="fetchCategoryNews('${category.category_id}','${category.category_name}')">${category.category_name}</a>`;
  });
};

const fetchCategoryNews = async (category_id, category_name) => {
  // console.log(category_id);
  const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
  const res = await fetch(url);
  const data = await res.json();
  showAllNews(data.data, category_name);
};

const showAllNews = (data, category_name) => {
  console.log(data, category_name);
  document.getElementById("category-count").innerText = data.length;
  document.getElementById("category-name").innerText = category_name;
};
