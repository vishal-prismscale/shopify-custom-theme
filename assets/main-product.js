
document.addEventListener("DOMContentLoaded", function () {
  const thumbnails = document.querySelectorAll(".thumbnail-item");
  const mainImage = document.getElementById("main-product-image");

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", function () {
      thumbnails.forEach((thumb) => thumb.classList.remove("active"));
      this.classList.add("active");
      mainImage.setAttribute(
        "src",
        this.querySelector("img").getAttribute("src")
      );
    });
  });
});




const decreaseBtn = document.getElementById("decrease-btn");
const increaseBtn = document.getElementById("increase-btn");
const quantityInput = document.getElementById("quantity");
const quantityValue = document.getElementById("product-quantity-value");
const buyNowBtn = document.querySelector(".product-buy-button");
const addToCartBtn = document.querySelector(".product-add-to-cart-button");


// Decrease quantity
decreaseBtn.addEventListener("click", function () {
  let currentValue = parseInt(quantityInput.value);
  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
    quantityValue.textContent = currentValue - 1;
  }
});

// Increase quantity
increaseBtn.addEventListener("click", function () {
  let currentValue = parseInt(quantityInput.value);
  quantityInput.value = currentValue + 1;
  quantityValue.textContent = currentValue + 1;
});


// Buy now button 
if (buyNowBtn) {
  buyNowBtn.addEventListener("click", function (e) {
    e.preventDefault()
  let form = document.getElementById('product-form')
    form.action = '/checkout'
    form.submit()
})  
}
if (addToCartBtn) {
  addToCartBtn.addEventListener("click", function (e) {
  let form = document.getElementById('product-form')
    form.action = '/cart/add'
})  
}

