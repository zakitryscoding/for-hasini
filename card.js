let stars = document.getElementById('stars');
// let meteorid = document.getElementById('meteorid');
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

// Browsers block autoplay with sound, so start the music on the first interaction instead
function startMusic() {
    audio.play().catch(function() {});
}
startMusic();
['click', 'touchstart', 'scroll', 'keydown'].forEach(function(evt) {
    window.addEventListener(evt, startMusic, { once: true });
});
