document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.querySelector('.gallery-images');
    const images = document.querySelectorAll('.gallery-images img');
    let currentIndex = 0;
    const imageWidth = 600; // Must match the CSS width

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        galleryContainer.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
        console.log('Previous clicked, currentIndex:', currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        galleryContainer.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
        console.log('Next clicked, currentIndex:', currentIndex);
    });
});