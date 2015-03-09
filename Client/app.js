// The Beholder

// Your CºDE here

// analyser node

var audioContext = new AudioContext();
var app = {};

// audio from YouTube Audio Library
fetch("audio/Swamp_Stomp.mp3").then(function(res) {
return audioContext.decodeAudioData(res.arrayBuffer());
}).then(function(audioBuffer) {
app.audioBuffer = audioBuffer;
});

var bufferSource, analyser;
var fftSize = 2048;
var arrayL = new Float32Array(fftSize);
var arrayR = new Float32Array(fftSize);

function start() {
bufferSource = audioContext.createBufferSource();
analyser = new StereoAnalyserNode(audioContext);

analyser.fftSize = fftSize;

bufferSource.buffer = app.audioBuffer;
bufferSource.start(audioContext.currentTime);
bufferSource.onended = function() {
  app.stop();
};

bufferSource.connect(analyser);
analyser.connect(audioContext.destination);

requestAnimationFrame(animate);
}

function stop() {
bufferSource.stop(audioContext.currentTime);
bufferSource.disconnect();
analyser.disconnect();
}

function animate() {
analyser.getFloatTimeDomainData(arrayL, arrayR);
app.drawTimeDomainData(arrayL, arrayR);

if (app.isPlaying) {
  setTimeout(function() {
    requestAnimationFrame(animate);
  }, 50);
}
}