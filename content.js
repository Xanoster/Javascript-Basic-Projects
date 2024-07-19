function pauseVideo() {
  const video = document.querySelector("video");
  if (video && !video.paused) {
    video.pause();
  }
}
