let stars = document.getElementById('stars');
let rocket = document.getElementById('rocket');
let text = document.getElementById('text');
let button = document.getElementById('button');

var audio = document.getElementById('background_music');

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    rocket.style.top = value * -0.5 + 'px';
    text.style.marginBottom = value * 1 + 'px';
    button.style.marginBottom = value * 1 + 'px';
});

function startMusic() {
    if (!audio) return;
    audio.volume = 0.45;
    audio.play().catch(function() {});
}

startMusic();
['click', 'touchstart', 'scroll', 'keydown'].forEach(function(evt) {
    window.addEventListener(evt, startMusic, { once: true });
});

if (audio) {
    audio.load();
}

if (button) {
    button.addEventListener('click', startMusic, { once: true });
}
