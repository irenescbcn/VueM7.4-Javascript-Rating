
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














