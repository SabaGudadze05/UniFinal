const cardContainer = document.getElementById("product-container");
const burger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const burgerFirstLine = document.getElementById("first");
const burgerSecondLine = document.getElementById("second");
const burgerThirdLine = document.getElementById("third");

burger.addEventListener("click", (event) => {
    event.stopPropagation();
    menu.classList.toggle("active");
    burgerFirstLine.classList.toggle("transformLeft");
    burgerSecondLine.classList.toggle("transformRight");
    burgerThirdLine.classList.toggle("none");
});

document.addEventListener("click", (event) => {
    const insideBurger =
        burger.contains(event.target) || menu.contains(event.target);

    if (!insideBurger && menu.classList.contains("active")) {
        menu.classList.remove("active");
        burgerFirstLine.classList.remove("transformLeft");
        burgerSecondLine.classList.remove("transformRight");
        burgerThirdLine.classList.remove("none");
    }
});

const API = "https://dummyjson.com/products";
const limit = 9;
const skip = 0;

fetch(`${API}?limit=${limit}&skip=${skip}&sortBy=rating&order=desc`)
    .then((res) => res.json())
    .then((data) => {
        const products = data.products;
        console.log(products);

        products.forEach((product) => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");
            productCard.innerHTML = `
            <div class="product-image">
                <img
                    src="${product.thumbnail}" alt="Premium Headphones"/>
            </div>
            <div class="product-details">
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <a href="productDetails.html?id=${product.id}" class="btn small primary">Visit</a>
            </div>
            `;
            cardContainer.appendChild(productCard);
        });
    })
    .catch((error) => console.error(error));
