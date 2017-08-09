'use strict';

function getValidMimeType() {
  var mimeTypes = ['video/webm; codecs="opus, vp9"',
                   'video/mp4; codecs="avc1.42E01E, mp4a.40.2"'];
  const fileExtRe = /\/(\w+);/;
  for (var t in mimeTypes) {
    if (MediaSource.isTypeSupported(mimeTypes[t])) {
      var mimeType = mimeTypes[t];
      var extension = fileExtRe.exec(mimeType)[1];
      break;
    }
  }
  console.log("using mimetype: " + mimeType)
  return {
    mimeType: mimeType,
    extension: extension
  };
}