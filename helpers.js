'use strict';

function getValidMimeType(mediaType) {
  mediaType = mediaType || "muxed";
  const mimeCatalog = {
    "codecs": {
      "video": [
        "video/webm; codecs=\"vp9\"",
        "video/mp4; codecs=\"mp4a.40.2\""
      ],
      "muxed": [
        "video/webm; codecs=\"opus, vp9\"",
        "video/mp4; codecs=\"avc1.42E01E, mp4a.40.2\""
      ]
    }
  }
  let mimeTypes = mimeCatalog.codecs[mediaType];

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