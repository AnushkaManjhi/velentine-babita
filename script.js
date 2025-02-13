let currentPage = 0;
const pages = document.querySelectorAll('.page');

function nextPage(pageNum) {
    pages[currentPage].classList.remove('show');
    currentPage = pageNum;
    pages[currentPage].classList.add('show');
    createHeartRain(); // Call heart rain when changing page
}

function answerQuestion(answer, pageNum) {
    if (answer === 'yes') {
        pages[currentPage].innerHTML = `
            <h2>Babita says: "Yes!"</h2>
            <p>That's so sweet! Let's keep going...</p>
            <button onclick="nextPage(${pageNum})">Next</button>
        `;
    } else {
        pages[currentPage].innerHTML = `
            <h2>Babita says: "No..."</h2>
            <p>It's okay! Maybe next time...</p>
            <button onclick="nextPage(${pageNum})">Next</button>
        `;
    }
    createFlowerHearts(); // Create flower hearts when answering
}

function resetGame() {
    currentPage = 0;
    pages.forEach(page => page.classList.remove('show'));
    pages[0].classList.add('show');
}

function createHeartRain() {
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        document.body.appendChild(heart);

        const randomPosX = Math.random() * window.innerWidth;
        heart.style.left = `${randomPosX}px`;

        setTimeout(() => {
            heart.remove();
        }, 3000); // Remove the heart after the animation
    }
}

function createFlowerHearts() {
    const flowerHeart = document.createElement('div');
    flowerHeart.classList.add('flower-heart');
    document.body.appendChild(flowerHeart);

    const randomPosX = Math.random() * window.innerWidth;
    const randomPosY = Math.random() * window.innerHeight;
    
    flowerHeart.style.left = `${randomPosX}px`;
    flowerHeart.style.top = `${randomPosY}px`;

    setTimeout(() => {
        flowerHeart.remove();
    }, 1000); // Remove the flower heart after animation
}

// Initialize the game
window.onload = () => {
    pages[0].classList.add('show');
};
