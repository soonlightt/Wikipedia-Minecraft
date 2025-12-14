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

    music.volume = 0.4;

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
