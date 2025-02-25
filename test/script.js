document.addEventListener('DOMContentLoaded', () => {
    let mouse = document.querySelector('.mouse');

    if (!mouse) {
        console.error("Element with class 'mouse' not found.");
        return;
    }

    mouse.addEventListener('mousemove', (e) => {
        gsap.to(mouse, {
            x: e.clientX,
            y: e.clientY
        });
    });
});
