// slides script

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(() => {
    slides[slideIndex - 1].classList.add("active");
  }, 10);

  dots[slideIndex - 1].classList.add("active");
}

setInterval(() => {
  plusSlides(1);
}, 5000);



let signInBtn = document.querySelector(".sign-in-btn");
let signUpBtn = document.querySelector(".sign-up-btn");

//Limitations

function constraintAlert() {
  alert("This page is under construction!");
}

signInBtn.addEventListener("click", () => {
  constraintAlert();
});

signUpBtn.addEventListener("click", () => {
  constraintAlert();
});


// tweet slider logic
const tweetTrack = document.getElementById("tweetTrack");
const tweetCards = tweetTrack ? tweetTrack.querySelectorAll(".tweet-card") : [];
const tweetDots = document.querySelectorAll(".tweet-dot");
let tweetIndex = 0;
let tweetIntervalId;

function updateTweetSlider() {
  if (!tweetTrack || !tweetCards.length) return;
  tweetTrack.style.transform = `translateX(-${tweetIndex * 100}%)`;
  tweetDots.forEach((dot, idx) => {
    dot.classList.toggle("active", idx === tweetIndex);
  });
}

function resetTweetInterval() {
  if (!tweetTrack || !tweetCards.length) return;
  clearInterval(tweetIntervalId);
  tweetIntervalId = setInterval(() => changeTweet(1, true), 6500);
}

function changeTweet(step, isAuto = false) {
  if (!tweetTrack || !tweetCards.length) return;
  tweetIndex = (tweetIndex + step + tweetCards.length) % tweetCards.length;
  updateTweetSlider();
  if (!isAuto) {
    resetTweetInterval();
  }
}

function goToTweet(index) {
  if (!tweetTrack || !tweetCards.length) return;
  tweetIndex = index;
  updateTweetSlider();
  resetTweetInterval();
}

if (tweetTrack && tweetCards.length) {
  updateTweetSlider();
  resetTweetInterval();
}


// Products slider logic
const productsTrack = document.getElementById("productsTrack");
const productCards = productsTrack ? productsTrack.querySelectorAll(".product-card") : [];
const productDots = document.querySelectorAll(".product-dot");
let productIndex = 0;
let productIntervalId;

function updateProductSlider() {
  if (!productsTrack || !productCards.length) return;
  productsTrack.style.transform = `translateX(-${productIndex * 100}%)`;
  productDots.forEach((dot, idx) => {
    dot.classList.toggle("active", idx === productIndex);
  });
}

function resetProductInterval() {
  if (!productsTrack || !productCards.length) return;
  clearInterval(productIntervalId);
  productIntervalId = setInterval(() => changeProduct(1, true), 7000);
}

function changeProduct(step, isAuto = false) {
  if (!productsTrack || !productCards.length) return;
  productIndex = (productIndex + step + productCards.length) % productCards.length;
  updateProductSlider();
  if (!isAuto) {
    resetProductInterval();
  }
}

function goToProduct(index) {
  if (!productsTrack || !productCards.length) return;
  productIndex = index;
  updateProductSlider();
  resetProductInterval();
}

if (productsTrack && productCards.length) {
  updateProductSlider();
  resetProductInterval();
}

