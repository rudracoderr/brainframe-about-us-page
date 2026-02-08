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
const counters = document.querySelectorAll(".counter");

const runCounter = (counter) => {

    const target = parseFloat(counter.dataset.target);
    const suffix = counter.dataset.suffix || "";
    const decimal = parseInt(counter.dataset.decimal) || 0;

    let current = 0;

    const duration = 2000; // total animation time
    const startTime = performance.now();

    const update = (now) => {

        const progress = Math.min((now - startTime) / duration, 1);
        current = target * progress;

        let value;

        if(decimal > 0){
            value = current.toFixed(decimal);
        }else{
            value = Math.floor(current).toLocaleString();
        }

        counter.textContent = value + suffix;

        if(progress < 1){
            requestAnimationFrame(update);
        }else{
            counter.textContent = target.toLocaleString() + suffix;
        }
    };

    requestAnimationFrame(update);
};


const observer = new IntersectionObserver((entries, obs) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            runCounter(entry.target);
            obs.unobserve(entry.target); // run only once
        }

    });

},{ threshold: 0.6 });


counters.forEach(counter => observer.observe(counter));

