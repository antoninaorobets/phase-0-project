const img = document.createElement("img")

img.src = "bang.jpeg"


const fixButton = document.getElementById("fix")
// fixButton.textContent="Save the World!"
// fixButton,className="button"
// fixButton.id="fix"

const noButton = document.getElementById("noClick")

const h1 = document.querySelector("h1")


document.getElementById("noClick").addEventListener("click", function() {
    noButton.className="hidden";
   
    document.getElementById('bang-img').appendChild(img);
    fixButton.className="button";
    h1.textContent= "What have YOU done?!"
  });

document.getElementById("fix").addEventListener("click", function() {
    noButton.className="button";
    fixButton.className="hidden"
    img.className="hidden"
    h1.textContent= "Whant to try again?"
  });
