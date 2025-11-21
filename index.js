const images = document.querySelectorAll(".carousel-image");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const autoPlayCheckbox = document.getElementById("autoPlay");

let index = 0;
let autoPlayInterval = null;

// Show image at index
function showImage(i) {
    images.forEach(img => img.classList.remove("active"));
    images[i].classList.add("active");
}

// Next image
function nextImage() {
    index = (index + 1) % images.length;
    showImage(index);
}

// Previous image
function prevImage() {
    index = (index - 1 + images.length) % images.length;
    showImage(index);
}

// Start auto rotation
function startAutoPlay() {
    autoPlayInterval = setInterval(nextImage, 2500);
}

// Stop auto rotation
function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

// Button events
nextBtn.addEventListener("click", () => {
    nextImage();
    if (autoPlayCheckbox.checked) {
        stopAutoPlay();
        startAutoPlay();
    }
});

prevBtn.addEventListener("click", () => {
    prevImage();
    if (autoPlayCheckbox.checked) {
        stopAutoPlay();
        startAutoPlay();
    }
});

// Autoplay Toggle
autoPlayCheckbox.addEventListener("change", () => {
    if (autoPlayCheckbox.checked) {
        startAutoPlay();
    } else {
        stopAutoPlay();
    }
});

// Initial image
showImage(index);
