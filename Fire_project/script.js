document.addEventListener('DOMContentLoaded', () => {
    const cardList = document.querySelector('.card-list');
    const nextButton = document.querySelector('.next-button');
    const prevButton = document.querySelector('.prev-button');
    const cardItems = document.querySelectorAll('.card-item');
    let cardCount = cardItems.length;
    let cardWidth = cardItems[0].offsetWidth;
    let currentIndex = 0;
    let autoSlideInterval;

    function updateSliderPosition() {
        const offset = -currentIndex * cardWidth;
        cardList.style.transform = `translateX(${offset}px)`;
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            if (currentIndex < cardCount - 3) { // 3 is the number of cards shown at a time
                currentIndex++;
            } else {
                currentIndex = 0; // Reset to the start
            }
            updateSliderPosition();
        }, 1000); // Change slide every 1 second
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    nextButton.addEventListener('click', () => {
        stopAutoSlide(); // Stop auto slide when manually navigating
        if (currentIndex < cardCount - 3) { // 3 is the number of cards shown at a time
            currentIndex++;
            updateSliderPosition();
        }
        startAutoSlide(); // Restart auto slide
    });

    prevButton.addEventListener('click', () => {
        stopAutoSlide(); // Stop auto slide when manually navigating
        if (currentIndex > 0) {
            currentIndex--;
            updateSliderPosition();
        }
        startAutoSlide(); // Restart auto slide
    });

    // Start the auto-slide when the page loads
    startAutoSlide();

    // Optionally, adjust the width on window resize
    window.addEventListener('resize', () => {
        // Recalculate cardWidth and update slider position
        cardWidth = cardItems[0].offsetWidth;
        updateSliderPosition();
    });
});
