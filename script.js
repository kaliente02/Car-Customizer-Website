const brandSelect = document.getElementById("brand");
const versionSelect = document.getElementById("version");
const colorInput = document.getElementById("color");
const styleSelect = document.getElementById("style");
const carImage = document.getElementById("carImage");
const brandLogo = document.getElementById("brandLogo");
const details = document.getElementById("details");

// Local car images (inside /images)
const carImages = {
  toyota: "images/car-toyota.svg",
  tesla: "images/car-tesla.svg",
  bmw: "images/car-bmw.svg"
};

// Local brand logos
const logos = {
  toyota: "images/logo-toyota.jpg",
  tesla: "images/logo-tesla.png",
  bmw: "images/logo-bmw.png"
};

function updateCar() {
  const brand = brandSelect.value;
  const version = versionSelect.value;
  const color = colorInput.value;
  const style = styleSelect.value;

  // Update car image and logo
  carImage.src = carImages[brand];
  brandLogo.src = logos[brand];

  // Apply color filter (simulate car paint)
  carImage.style.filter = `drop-shadow(0 0 0 ${color}) saturate(200%) brightness(0.9)`;

  // Apply style effects
  if (style === "classic") {
    carImage.style.transform = "scale(1)";
  } else if (style === "modern") {
    carImage.style.transform = "scale(1.05)";
  } else if (style === "futuristic") {
    carImage.style.transform = "scale(1.1) skewX(-5deg)";
  }

  // Update text details
  details.textContent = `Brand: ${brand.toUpperCase()} | Version: ${version} | Style: ${style}`;
}

// Add event listeners
[brandSelect, versionSelect, colorInput, styleSelect].forEach(el => {
  el.addEventListener("input", updateCar);
});

// Initialize on load
updateCar();
