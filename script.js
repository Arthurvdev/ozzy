document.getElementById('play-button').addEventListener('click', function() {
    var audio = document.getElementById('audio-player');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});