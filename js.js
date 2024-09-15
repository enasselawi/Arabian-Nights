const messages = [
    "Welcome to Arabian Nights Restaurant!",
    "Experience the flavors of the Arab!",
    "Your culinary adventure starts here!",
    "Savor the taste of Arabian cuisine!"
];

let currentIndex = 0;
const messageElement = document.getElementById('welcomeMessage');

function changeMessage() {
    messageElement.textContent = messages[currentIndex];
    currentIndex = (currentIndex + 1) % messages.length;
}

setInterval(changeMessage, 4000);


changeMessage();

let currentSlide = 0;
        const slides = document.querySelectorAll('.carousel img');

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.add('hidden');
                if (i === index) {
                    slide.classList.remove('hidden');
                }
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }

        showSlide(currentSlide);

// script.js

