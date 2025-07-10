const urlViaLink = new URLSearchParams(window.location.search);
const productID = urlViaLink.get("id");

const productContainer = document.getElementById("product-card");

if (productID) {
    fetch(`https://dummyjson.com/products/${productID}`)
        .then((res) => res.json())
        .then((product) => {
            console.log(product);
            const productCard = document.createElement("div");
            productCard.classList.add("container");
            productCard.classList.add("product-container");
            productRating = Math.round(product.rating);
            elseStar = 5 - productRating;
            solidStar = '<i class="fa-solid fa-star"></i>';
            regularStar = '<i class="fa-regular fa-star"></i>';

            productCard.innerHTML = `
            
            <div class="product-image-main">
                        <img
                            src="${product.thumbnail}"
                            alt="Sample Product"
                        />
                    </div>
                    <div class="product-thumbnails">
                        <img
                            src="${product.images[0]}"
                            alt="Thumbnail 1"
                        />
                        <img
                            src="${product.images[1]}"
                            alt="Thumbnail 2"
                        />
                       
                    </div>
                    <div class="product-info">
                        <h1>${product.title}</h1>
                        <div class="product-rating">
                            <span class="stars">
                            ${solidStar.repeat(productRating)}
                            ${regularStar.repeat(elseStar)}
                            </span>
                            <span>${productRating}/5</span>
                        </div>
                        <div class="product-price">$${product.price}</div>
                        <div class="product-description">
                           ${product.description}
                        </div>
                        <div class="product-actions">
                            <button class="btn primary">Add to Cart</button>
                            <a href="./index.html" class="back-link">Back to Products</a>
                        </div>
                    </div>
            `;
            productContainer.appendChild(productCard);
        });
}
