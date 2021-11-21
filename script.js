const img = document.createElement("img")
img.src = "bang.jpeg"


const fixButton = document.createElement("button")
fixButton.textContent="Save the World!"
fixButton,className="button"
fixButton.id="fix"

const noButton = document.getElementById("noClick")

const h1 = document.querySelector("h1")


document.getElementById("noClick").addEventListener("click", function() {
    document.getElementById('bang-img').appendChild(img);
    document.getElementById('bang-button').appendChild(fixButton);
    noButton.className="hidden"
    h1.textContent= "What have YOU done?!"
  });

document.getElementById("fix").addEventListener("click", function() {
      debugger;
    noButton.className.replace("hidden", "")
    fixButton.className="hidden"
    img.className="hidden"
    h1.textContent= "?!"
  });
