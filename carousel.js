const carouselImages = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-images img');
    let index = 0;

    function nextImage() {
        index++;
        if (index >= images.length) {
            index = 0;
        }
        const offset = -index * 100;
        carouselImages.style.transform = `translateX(${offset}px)`;
    }

    setInterval(nextImage, 3000);
