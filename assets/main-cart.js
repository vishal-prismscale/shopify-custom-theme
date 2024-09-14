const decreaseBtns = document.querySelectorAll(".quantity-btn#decrease-btn");
const increaseBtns = document.querySelectorAll(".quantity-btn#increase-btn");

decreaseBtns.forEach((decreaseBtn) => {
  decreaseBtn.addEventListener("click", function () {
    const form = this.closest('form');
    const quantityInput = form.querySelector('#quantity');
    let currentValue = parseInt(quantityInput.value);

    if (currentValue > 1) {
      quantityInput.value = currentValue - 1;
      form.submit();
    }
  });
});

increaseBtns.forEach((increaseBtn) => {
  increaseBtn.addEventListener("click", function () {
    const form = this.closest('form');
    const quantityInput = form.querySelector('#quantity');
    let currentValue = parseInt(quantityInput.value);

    quantityInput.value = currentValue + 1;
    form.submit();
  });
});
