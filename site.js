const button = document.getElementById('packetButton');
let video = null;

function increaseVolume() {
    var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    var source = audioCtx.createMediaElementSource(video);

    var gainNode = audioCtx.createGain();
    gainNode.gain.value = 100;
    source.connect(gainNode);

    gainNode.connect(audioCtx.destination);
};

function destroyButton() {
    button.remove();
};

function createVideoElement() {
    video = document.createElement('video');
    video.src = 'von.mp4';
    video.loop = true;
    video.id = "video";
    video.play();
    document.body.appendChild(video);
    increaseVolume();
};

button.addEventListener('click', () => {
    createVideoElement();
    destroyButton();
});