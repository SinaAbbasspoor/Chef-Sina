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



let signInBtn=document.querySelector(".sign-in-btn");
let signUpBtn=document.querySelector(".sign-up-btn");

//Limitations

function constraintAlert(){
  alert("This page is under construction!");
}

signInBtn.addEventListener("click",()=>{
  constraintAlert();
});

signUpBtn.addEventListener("click",()=>{
  constraintAlert();
});






