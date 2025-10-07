//SELECT ELEMENT IN DOM
var ImageObject = window.document.getElementById("imageSlider");

//START SLIDER
var currentImage = 1;
function startSlider() {
  ImageObject.src = "Images/" + currentImage + ".jpg";

  timerId = setInterval(function () {
    currentImage++;

    ImageObject.src = "Images/" + currentImage + ".jpg";

    if (currentImage >= 8) {
      currentImage = 1;
    }
  }, 1000);
  

}
//STOP SLIDER
function stopSlider() {
  clearInterval(timerId);

}



//NEXT SLIDE

function nextSlide() {
  currentImage++;

  ImageObject.src = "Images/" + currentImage + ".jpg";

  if (currentImage >= 8) {
    currentImage = 1;
  }
}

//PREV SLIDE

function prevSlide() {
  currentImage--;
  if (currentImage < 1) {
    currentImage = 8;
  }
  ImageObject.src = "Images/" + currentImage + ".jpg";
}
