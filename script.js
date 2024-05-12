const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.ad  ("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});

var sliderImages = document.querySelectorAll('.slider img');

var i = 0;

function slider(){
  for(var j = 0; j < sliderImages.length; j++){
    sliderImages[j].style.opacity = 0;
  }
  sliderImages[i].style.opacity = 1;

  if(i < sliderImages.length - 1){
    i++; 
  } else { 
    i = 0;
  }

}

setInterval(slider, 2000);
  