let btn = document.querySelector("#btn");
let coinface = document.querySelector(".coin-face");
let coinback = document.querySelector(".coin-back");

// Ensure initial state shows head and hides tail
coinback.style.visibility = "hidden";

btn.addEventListener("click", function () {
  console.log("Btn clicked!");
  btn.style.backgroundColor = "green";
  btn.style.color = "white";
  btn.disabled = true; // Fixed typo from .disable to .disabled

  // Temporarily restart animation by toggling class
  coinface.style.animation = "none";
  coinback.style.animation = "none";
  coinface.offsetHeight; // trigger reflow
  
  let randomNumber = Math.random();
  console.log(randomNumber);

  if (randomNumber < 0.5) {
    coinface.style.visibility = "visible";
    coinback.style.visibility = "hidden";
    coinface.style.animation = "rotateAnimation 1s ease-in";
  } else {
    coinface.style.visibility = "hidden";
    coinback.style.visibility = "visible";
    coinback.style.animation = "rotateAnimation 1s ease-in";
  }

  // Re-enable button after animation completes (1 second)
  setTimeout(() => {
    btn.disabled = false;
    btn.style.backgroundColor = ""; // Reset to default
    btn.style.color = "";
  }, 1000);
});

