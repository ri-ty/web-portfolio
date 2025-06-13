// Function to open the popup with the clicked image
function openPopup(src) {
    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popup-img");
    popupImg.src = src;
    popup.style.display = "flex";
}

// Function to close the popup
function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}

// (Optional: Close popup if clicked outside the image)
window.addEventListener('click', function(e) {
    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popup-img");
    if (e.target === popup && e.target !== popupImg) {
        popup.style.display = "none";
    }
});
// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});