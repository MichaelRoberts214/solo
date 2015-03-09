angular.module('app', [
  //'thebeholder.left',
  //'thebeholder.right',
  'ngRoute'
  ])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .otherwise({
      redirectTo: '/'
    })
}])
.run();




// Your CºDE here

// analyser node

// window.onload = function () {

//   var audioContext = new AudioContext();
//   var app = {};

//   // audio from YouTube Audio Library
//   // fred's soundcloud doesn't load
//   /*fetch("
//         http://cf-media.sndcdn.com/gz3GdfXGJYf8.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vZ3ozR2RmWEdKWWY4LjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE0MjU5Mjg0Mzh9fX1dfQ__&Signature=QHvEzJiK7Oc6J0HVWi1InOk7SKNOUSsnFjIphLwWX~OYAN6sGv5aVEPphMPPJq-qLXewQNpObvGEInaH6Ndw40Xqq6bsxbI7sETj1bqPKazAz-0JOyTY6m84c70S6BGxs3yy3L9K8vFUO-IdsXuaifC-ZblxUmG7k9F7sosWl4B3Ro1GHt1Cz2Z-kkhCyKMNDe7oYdm1Js5Pu33ThCIpXWsPJDNgiAypgt~3WLrijYzJoGlsVK-7qmqi-8E9twinXKyyg9eA4HfTHQLQuZ1UefEla9iDLE3meBwIYG01sePiIspNo7enyGc9pHlJ1p7Tgm6qQwbx-NxBdDT9bgfQlA__&Key-Pair-Id=APKAJAGZ7VMH2PFPW6UQ
//     ").then(function(res) {*/

//   fetch('
//       http://cf-media.sndcdn.com/323B2oVdm0iI.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vMzIzQjJvVmRtMGlJLjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE0MjU5Mjg5ODd9fX1dfQ__&Signature=uaCWHgmAWq3ivajOEBJjmOViqHHDaJkTNW06EnvS7bkXDa9p3vgLI6bmN9NafCL9vUj-qQUx3gel99Why8-hd1rPuGxLPzQi0HKxWW~lRgNVqDRHGnYYJqO~fX1msXA1h0ZMtBldxswIB4FMn2SqcMqMie7vw8sF6rDO4kawfrJIIIWYDElUAMZWxtl4SNA3Nv37cxnSLLFHiOxzFljYq7THWYsIrTyMUKub09D9vKRiuF019WM1Vwigze4B~TLbFGbecNcw9nH3tiso9VGNR61~cl1ClxFbKeO3nBZ82AvPdfoo6TfcV5YXuOQ-lYBl77gvRNGzA2i5l9LI5hWhBA__&Key-Pair-Id=APKAJAGZ7VMH2PFPW6UQ
//     ')
//       .then(function(res) {

//   fetch('Audio/NewWaveBossaNova')
//       .then(function(res) {

//   return audioContext.decodeAudioData(res.arrayBuffer());
//   }).then(function(audioBuffer) {
//     app.audioBuffer = audioBuffer;
//   });

//   console.log("app object:",app);

//   var bufferSource, analyser;
//   var fftSize = 2048;
//   var arrayL = new Float32Array(fftSize);
//   var arrayR = new Float32Array(fftSize);

//   console.log("array L:",arrayL);

//   function start() {
//     bufferSource = audioContext.createBufferSource();
//     analyser = new StereoAnalyserNode(audioContext);

//     analyser.fftSize = fftSize;

//     bufferSource.buffer = app.audioBuffer;
//     bufferSource.start(audioContext.currentTime);
//     bufferSource.onended = function() {
//       app.stop();
//     };

//     bufferSource.connect(analyser);
//     analyser.connect(audioContext.destination);

//     requestAnimationFrame(animate);
//   }

//   function stop() {
//     bufferSource.stop(audioContext.currentTime);
//     bufferSource.disconnect();
//     analyser.disconnect();
//   }

//   function animate() {
//     analyser.getFloatTimeDomainData(arrayL, arrayR);
//     app.drawTimeDomainData(arrayL, arrayR);

//     if (app.isPlaying) {
//       setTimeout(function() {
//         requestAnimationFrame(animate);
//       }, 50);
//     }
//   }

// }
