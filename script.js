function openImage(src) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");

    modal.style.display = "block";
    modalImg.src = src;
}

document.querySelector(".modal-close").onclick = function () {
    document.getElementById("imageModal").style.display = "none";
};

document.getElementById("imageModal").onclick = function (e) {
    if (e.target === this) {
        this.style.display = "none";
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("bg-music");
    const btn = document.getElementById("music-btn");

    music.volume = 0.8;

    btn.addEventListener("click", () => {
        if (music.paused) {
            music.play();
            btn.textContent = "🔇 Музыка";
        } else {
            music.pause();
            btn.textContent = "🔊 Музыка";
        }
    });
});
let achievementShown = false;

window.addEventListener('scroll', () => {
    if (achievementShown) return;

    const footer = document.querySelector('.footer');
    const footerTop = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (footerTop < windowHeight) {
        const achievement = document.getElementById('achievement');
        const sound = document.getElementById('achievement-sound');

        achievement.classList.add('show');

        sound.volume = 0.1;
        sound.currentTime = 0;
        sound.play();

        achievementShown = true;

        setTimeout(() => {
            achievement.classList.remove('show');
        }, 4000);
    }
});


