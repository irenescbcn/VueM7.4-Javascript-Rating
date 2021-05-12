centrar();

function centrar(){
  var divStars = document.getElementById("ratingStars"), 
    elemWidth = divStars.offsetWidth, 
    elemHeight = divStars.offsetHeight, 
    winWidth = window.innerWidth, 
    winHeight = window.innerHeight, 
    winX = window.scrollX, 
    winY = window.scrollY;
      
    divStars.style.marginTop = (winHeight / 2 - elemHeight / 2) + winY + "px"; //Centrado vertical
    divStars.style.marginLeft = (winWidth / 2 - elemWidth / 2) + winX + "px"; //Centrado horizontal
}


document.addEventListener("click", function (e){
  var rating = document.querySelector("#ratingStars");
  var targetElement = e.target;
  do {
    if (targetElement == rating) {
        return;
    }
    targetElement = targetElement.parentNode;
} while (targetElement);
rating.style.setProperty("--check-secondary", "#ff8474");
});














