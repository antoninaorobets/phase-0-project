const img = document.getElementById("img")

const fixButton = document.getElementById("fix")

const noButton = document.getElementById("noClick")

const h1 = document.querySelector("h1")


document.getElementById("noClick").addEventListener("click", function() {
    noButton.className="hidden";
    img.className="immage";
    fixButton.className="button";
    h1.textContent= "What have YOU done?!"
  });

document.getElementById("fix").addEventListener("click", function() {
    noButton.className="button";
    fixButton.className="hidden"
    img.className="hidden"
    h1.textContent= "Do not click this button!"
  });
