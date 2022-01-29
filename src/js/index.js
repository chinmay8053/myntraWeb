console.log("working");
const API_url = "https://fakestoreapi.com/products/category/";

const fetchAPI = async function (url) {
 const res = await fetch(`${url}`);
 const data = await res.json();
 return data;
};

const parentEl = document.querySelector(".products");
const men = document.querySelector(".men");
const women = document.querySelector(".women");
const jewelry = document.querySelector(".jewelery");
const electronics = document.querySelector(".electronics");

const loading = function () {
 parentEl.classList.add("padding-top");
 return (parentEl.innerHTML = `<img src = 'https://i.stack.imgur.com/ATB3o.gif' />`);
};

const html = function (data) {
 return data
  .map((entry) => {
   return `
    <li class="product">
    <div class="shirt">
     <img src="${entry.image}" alt="" />
     <div class="productInfo">
      <h3>${entry.title.substring(0, 25)}</h3>
      <h4>${entry.description.substring(0, 30)}...</h4>
      <p> $${entry.price}</p>
     </div>
    </div>
   </li>
    `;
  })
  .join(" ");
};

const menAPI = async function () {
 loading();
 const data = await fetchAPI(`${API_url}men's clothing`);
 parentEl.innerHTML = "";
 parentEl.insertAdjacentHTML("afterbegin", html(data));
};

const womenAPI = async function () {
 loading();
 const data = await fetchAPI(`${API_url}women's clothing`);
 parentEl.innerHTML = "";
 parentEl.insertAdjacentHTML("afterbegin", html(data));
};

const jewelryAPI = async function () {
 loading();
 const data = await fetchAPI(`${API_url}jewelery`);
 parentEl.innerHTML = "";
 parentEl.insertAdjacentHTML("afterbegin", html(data));
};

const electronicsAPI = async function () {
 loading();
 const data = await fetchAPI(`${API_url}electronics`);
 parentEl.innerHTML = "";
 parentEl.insertAdjacentHTML("afterbegin", html(data));
};

men.addEventListener("click", menAPI);
women.addEventListener("click", womenAPI);
jewelry.addEventListener("click", jewelryAPI);
electronics.addEventListener("click", electronicsAPI);
