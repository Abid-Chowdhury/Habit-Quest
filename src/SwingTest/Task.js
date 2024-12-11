// script.js
document.getElementById('swingButton').addEventListener('click', () => {
    const sword = document.getElementById('sword');

    // Add the swing class
    sword.classList.add('swing');

    // Remove the swing class after the animation ends
    sword.addEventListener('animationend', () => {
        sword.classList.remove('swing');
    }, { once: true });
});
