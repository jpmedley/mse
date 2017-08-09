'use strict';

function showBuffers() {
  const video = document.querySelector('video');
  setInterval(() => {
    console.log("currentTime = " + video.currentTime + ", dropped = " 
      + video.webkitDroppedFrameCount + ", decoded = " + video.webkitDecodedFrameCount + "\n");
    let buffered = video.buffered;
    for (let i = 0; i < buffered; i++) {
      console.log("\tbuffered[" + i + "]: " + buffered.start(i) + "-" + buffered.end(i) + "\n")
    }
  }, 1000);
}

showBuffers();