'use strict';

function fetchRange(file, range) {
  return new Promise((resolve, reject) => {
    const mediaHeaders = new Headers();
    range = "bytes=" + range;
    mediaHeaders.append('Range', range);
    const reqInit = { headers: mediaHeaders };
    fetch(file, reqInit)
    .then(response => {
      resolve(response.body.getReader())
    })
    .catch(e => {
      reject(e);
    })
  })



  // const mediaHeaders = new Headers();
  // range = "bytes=" + range;
  // mediaHeaders.append('Range', range);
  // const reqInit = { headers: mediaHeaders };
  // return fetch(file, reqInit)
  // .then(response => {
  //   return response.body.getReader();
  // })
  // .catch(e => {
  //   console.log(e);
  // })
}

function getValidMimeType(mediaType, containerType) {
  mediaType = mediaType || "muxed";
  const mimeCatalog = {
    "codecs": {
      "video": [
        "video/webm; codecs=\"vp9\"",
        "video/mp4; codecs=\"avc1.64001f\""
      ],
      "muxed": [
        "video/webm; codecs=\"opus, vp9\"",
        "video/mp4; codecs=\"avc1.42E01E, mp4a.40.2\""
      ]
    }
  }

  let mimeTypes = new Array();
  if (containerType) {
    let allMimeTypes = mimeCatalog.codecs[mediaType];
    // let mimeTypes = new Array();
    allMimeTypes.forEach( (val,index,array) => {
      if (val.includes(containerType)) {
        mimeTypes.push(val);
      }
    })
  } else {
    mimeTypes = mimeCatalog.codecs[mediaType];
  }


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
