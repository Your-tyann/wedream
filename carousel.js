let currentIndex = 0;
        function showImage(index) {
            const images = document.getElementById('carouselImages');
            const totalImages = images.children.length;
            if (index < 0) 
            {currentIndex = totalImages - 1;} 
            else if (index >= totalImages)
            {currentIndex = 0;}
            else 
            {currentIndex = index;}
images.style.transform = `translateX(-${currentIndex * 500}px)`;}
function nextImage() {showImage(currentIndex + 1);}
function prevImage() {showImage(currentIndex - 1);}
