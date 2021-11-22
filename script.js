const img = document.getElementById("img")

const fixButton = document.getElementById("fixButton")

const noButton = document.getElementById("noButton")

const h1 = document.querySelector("h1")


document.getElementById("noButton").addEventListener("click", function() {
    noButton.className="hidden";
    img.className="immage";
    fixButton.className="button";
    h1.textContent= "What have YOU done?!"
  });

document.getElementById("fixButton").addEventListener("click", function() {
    noButton.className="button";
    fixButton.className="hidden"
    img.className="hidden"
    h1.textContent= "Do not click this button!"
  });
