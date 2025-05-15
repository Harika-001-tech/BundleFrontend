document.addEventListener("DOMContentLoaded", () => {
  const bundleOptions = document.querySelectorAll(".bundle-option");
  const totalPriceElement = document.querySelector(".total-price");
  const addToCartButton = document.querySelector(".add-to-cart");

  const prices = {
    1: 195.00,
    2: 345.00,
    3: 528.00
  };

  let selectedOption = null;

  bundleOptions.forEach(option => {
    const inputsDiv = option.querySelector(".inputs");
    inputsDiv.classList.add("hidden");
  });
  totalPriceElement.textContent = `DKK 0.00`;

  bundleOptions.forEach(option => {
    const input = option.querySelector("input[type='radio']");
    const inputsDiv = option.querySelector(".inputs");

    input.addEventListener("change", () => {
      if (selectedOption === option) {
       
        input.checked = false;
        inputsDiv.classList.add("hidden");
        totalPriceElement.textContent = `DKK 0.00`;
        selectedOption = null;
      } else {
        
        if (selectedOption) {
          selectedOption.querySelector(".inputs").classList.add("hidden");
          selectedOption.querySelector("input[type='radio']").checked = false;
        }

       
        selectedOption = option;
        inputsDiv.classList.remove("hidden");
        totalPriceElement.textContent = `DKK ${prices[input.value].toFixed(2)}`;
      }
    });
  });

  addToCartButton.addEventListener("click", () => {
    if (selectedOption) {
      const size = selectedOption.querySelector("select:nth-child(1)").value;
      const color = selectedOption.querySelector("select:nth-child(2)").value;
      alert(`Added ${size}, ${color} bundle to cart!`);
    } else {
      alert("Please select a bundle before adding to the cart.");
    }
  });
});
