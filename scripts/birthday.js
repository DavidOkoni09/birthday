// Simple interaction: Alert a message when a card is clicked
document.querySelectorAll('.photo-card').forEach(card => {
    card.addEventListener('click', () => {
        const caption = card.querySelector('.caption').innerText;
        console.log("Viewing memory: " + caption);
    });
});

function openLightbox(card) {
    const imgPath = card.querySelector('img').src;
    const captionText = card.querySelector('.caption').innerText;
            
    document.getElementById('lightbox-img').src = imgPath;
    document.getElementById('lightbox-caption').innerText = captionText;
    document.getElementById('lightbox').style.display = 'flex';
}

const music = document.getElementById('birthdaySong');
const btn = document.getElementById('musicBtn');

function toggleMusic() {
    if (music.paused) {
        music.play();
        btn.innerText = "Pause Music ⏸️";
    } else {
        music.pause();
        btn.innerText = "Play Music 🎵";
    }
}