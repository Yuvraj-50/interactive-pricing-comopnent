const packageSize_El = document.getElementById("package-size");
const priceEl = document.querySelectorAll(".price");
const slideBarEl = document.querySelector(".slider");
const checkBoxBtnEl = document.querySelector(".price-checkbox");
const card = document.querySelector(".card");
const body = document.querySelector("body");
let price = 8;

checkCheckbox();

function checkCheckbox() {
  if (checkBoxBtnEl.checked) {
    sliderValueYear();
  } else {
    sliderValueMonth();
  }
}

function sliderValueMonth() {
  if (slideBarEl.value == 1) {
    price = 8;
    packageSize_El.textContent = "10kPageviews";
    priceEl.forEach((pri) => (pri.textContent = `$${price.toFixed(2, 0)}`));
  } else if (slideBarEl.value == 2) {
    price = 12;
    packageSize_El.textContent = "50kPageviews";
    priceEl.forEach((pri) => (pri.textContent = `$${price.toFixed(2, 0)}`));
  } else if (slideBarEl.value == 3) {
    price = 16;
    packageSize_El.textContent = "100kPageviews";
    priceEl.forEach((pri) => (pri.textContent = `$${price.toFixed(2, 0)}`));
  } else if (slideBarEl.value == 4) {
    price = 24;
    packageSize_El.textContent = "500kpageviews";
    priceEl.forEach((pri) => (pri.textContent = `$${price.toFixed(2, 0)}`));
  } else {
    price = 36;
    packageSize_El.textContent = "1mpageviews";
    priceEl.forEach((pri) => (pri.textContent = `$${price.toFixed(2, 0)}`));
  }
}

function sliderValueYear() {
  if (slideBarEl.value == 1) {
    price = 8;
    packageSize_El.textContent = "10kPageviews";
    priceEl.forEach(
      (pri) =>
        (pri.textContent = `$${(price - price * (25 / 100)).toFixed(2, 0)}`)
    );
  } else if (slideBarEl.value == 2) {
    price = 12;
    packageSize_El.textContent = "50kPageviews";
    priceEl.forEach(
      (pri) =>
        (pri.textContent = `$${(price - price * (25 / 100)).toFixed(2, 0)}`)
    );
  } else if (slideBarEl.value == 3) {
    price = 16;
    packageSize_El.textContent = "100kPageviews";
    priceEl.forEach(
      (pri) =>
        (pri.textContent = `$${(price - price * (25 / 100)).toFixed(2, 0)}`)
    );
  } else if (slideBarEl.value == 4) {
    price = 24;
    packageSize_El.textContent = "500k page views";
    priceEl.forEach(
      (pri) =>
        (pri.textContent = `$${(price - price * (25 / 100)).toFixed(2, 0)}`)
    );
  } else {
    price = 36;
    packageSize_El.textContent = "1M page views";
    priceEl.forEach(
      (pri) =>
        (pri.textContent = `$${(price - price * (25 / 100)).toFixed(2, 0)}`)
    );
  }
}

slideBarEl.addEventListener("input", checkCheckbox);
checkBoxBtnEl.addEventListener("click", checkCheckbox);
