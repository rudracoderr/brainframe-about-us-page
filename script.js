const contactBtn = document.querySelector('a[href="#contact"]');
const overlay = document.getElementById('contactOverlay');
const closeBtn = document.getElementById('contactClose');

/* open */
contactBtn.addEventListener('click', (e) => {
    e.preventDefault();
    overlay.classList.add('active');
});

/* close button */
closeBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
});

/* click outside */
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.classList.remove('active');
    }
});

/* ESC key */
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        overlay.classList.remove('active');
    }
});
