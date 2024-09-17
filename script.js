function loadVideo(videoSrc) {
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.src = videoSrc;
    videoPlayer.play();
}