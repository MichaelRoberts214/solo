angular.module('app', [
  //'thebeholder.left',
  //'thebeholder.right',
  //'stereo-analyser-node',
  'app.visualizer',
  'ngRoute'
  ])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    // .when('/', {
    //   templateUrl: 'app/visualizer/visualizer.html',
    //   controller: 'VisualizerController'
    // })
    .otherwise({
      redirectTo: '/'
    })
}])

.run(/*function($scope) {
  $scope.go = function ( path ) {
    $location.path( path );
  };
}*/)

.controller('VisualizerController', function ($scope) {
  //$scope.audioContext = require('angular-audio-context');
  $scope.data = {
    freqs: [0,1,2]
  };
})

.directive('visualize', function() {
  return {
      restrict: 'AE',
      replace: 'true',
      template: '<div id="container" ng-controller = "VisualizerController" >asdf {{freqs}}</div'
  };
})
;




// Your CºDE here

// analyser node

window.onload = function () {

  var audioContext = new AudioContext();
  var app = {};

  // audio from YouTube Audio Library
  // fred's soundcloud doesn't load
  /*fetch("
        http://cf-media.sndcdn.com/gz3GdfXGJYf8.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vZ3ozR2RmWEdKWWY4LjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE0MjU5Mjg0Mzh9fX1dfQ__&Signature=QHvEzJiK7Oc6J0HVWi1InOk7SKNOUSsnFjIphLwWX~OYAN6sGv5aVEPphMPPJq-qLXewQNpObvGEInaH6Ndw40Xqq6bsxbI7sETj1bqPKazAz-0JOyTY6m84c70S6BGxs3yy3L9K8vFUO-IdsXuaifC-ZblxUmG7k9F7sosWl4B3Ro1GHt1Cz2Z-kkhCyKMNDe7oYdm1Js5Pu33ThCIpXWsPJDNgiAypgt~3WLrijYzJoGlsVK-7qmqi-8E9twinXKyyg9eA4HfTHQLQuZ1UefEla9iDLE3meBwIYG01sePiIspNo7enyGc9pHlJ1p7Tgm6qQwbx-NxBdDT9bgfQlA__&Key-Pair-Id=APKAJAGZ7VMH2PFPW6UQ
    ").then(function(res) {*/

  // fetch('
  //     http://cf-media.sndcdn.com/323B2oVdm0iI.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vMzIzQjJvVmRtMGlJLjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE0MjU5Mjg5ODd9fX1dfQ__&Signature=uaCWHgmAWq3ivajOEBJjmOViqHHDaJkTNW06EnvS7bkXDa9p3vgLI6bmN9NafCL9vUj-qQUx3gel99Why8-hd1rPuGxLPzQi0HKxWW~lRgNVqDRHGnYYJqO~fX1msXA1h0ZMtBldxswIB4FMn2SqcMqMie7vw8sF6rDO4kawfrJIIIWYDElUAMZWxtl4SNA3Nv37cxnSLLFHiOxzFljYq7THWYsIrTyMUKub09D9vKRiuF019WM1Vwigze4B~TLbFGbecNcw9nH3tiso9VGNR61~cl1ClxFbKeO3nBZ82AvPdfoo6TfcV5YXuOQ-lYBl77gvRNGzA2i5l9LI5hWhBA__&Key-Pair-Id=APKAJAGZ7VMH2PFPW6UQ
  //   ')
  //     .then(function(res) {


// use python's simple server 
// /NewWaveBossaNova.mp3

// uncomment below VVVVV

  // fetch('http://localhost:8000')
  //     .then(function(res) {

  // return audioContext.decodeAudioData(res.arrayBuffer());
  // }).then(function(audioBuffer) {
  //   app.audioBuffer = audioBuffer;
  //   console.log("buffer",audioBuffer);
  // });

  // console.log("app object:",app);

  // var bufferSource, analyser;
  // var fftSize = 2048;
  // var arrayL = new Float32Array(fftSize);
  // var arrayR = new Float32Array(fftSize);

  // console.log("array L:",arrayL);

  // function start() {
  //   bufferSource = audioContext.createBufferSource();
  //   analyser = new StereoAnalyserNode(audioContext);

  //   analyser.fftSize = fftSize;

  //   bufferSource.buffer = app.audioBuffer;
  //   bufferSource.start(audioContext.currentTime);
  //   bufferSource.onended = function() {
  //     app.stop();
  //   };

  //   bufferSource.connect(analyser);
  //   analyser.connect(audioContext.destination);

  //   requestAnimationFrame(animate);
  // }

  // function stop() {
  //   bufferSource.stop(audioContext.currentTime);
  //   bufferSource.disconnect();
  //   analyser.disconnect();
  // }

  // function animate() {
  //   analyser.getFloatTimeDomainData(arrayL, arrayR);
  //   app.drawTimeDomainData(arrayL, arrayR);

  //   if (app.isPlaying) {
  //     setTimeout(function() {
  //       requestAnimationFrame(animate);
  //     }, 50);
  //   }
  // }

  // document.getElementById("clickMe").onclick = function() {
  //   console.log("started");
  //   // it gets here but the start() function is broken 
  //   start();
  // }


  /******************
  // d3 visualization
  ******************/

  // var width = 800;
  // var height = 600;

  // var container = d3.selectAll('body').append('svg')
  //   .attr('width', width)
  //   .attr('height', height)
  //   .style("border", "1px solid white")

  // var bars = 3; // set this to the number of frequencies later
  // var generateArray = function (n) {
  //   var generatedArray = [];
  //   for (var i = 0; i < n; i++) {
  //     generatedArray.push(i);
  //   }
  //   return generatedArray
  // }

  // var imgs = d3.select('svg').selectAll("image")
  //   .data(generateArray(bars));

  // imgs.enter()
  //   .append("svg:image")
  //   .attr("class", "enemy") //this applies to the whole group
  //   .attr("xlink:href", "shuriken.png")
  //   // .attr("x", function(d){ return d * 30})
  //   .attr("x", "0")
  //   .attr("y", "0") // put in circle - sin and cos
  //   .attr("width", "40")
  //   .attr("height", "40");

  var data = [3,1,2];

  var x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, 420]);

  d3.select(".visual")
    .selectAll("div")
      .data(data)
    .enter().append("div").attr("class", "bar")
      .style("width", function(d) { return x(d) + "px"; })
      .style("height", function(d) { return 10 + "px"});
      //.text(function(d) { return d; });

  // var visual = d3.select(".visual");
  // var bar = visual.selectAll("div");
  // var barUpdate = bar.data(data);
  // var barEnter = barUpdate.enter().append("div");
  // barEnter.style("width", function(d) { return d * 10 + "px"; });
  // barEnter.text(function(d) { return d; });



}







// window.AudioContext = (
//   window.AudioContext ||
//   window.webkitAudioContext ||
//   null
// );

// if (!AudioContext) {
//   throw new Error("AudioContext not supported!");
// }

// // Create a new audio context.
// var ctx = new AudioContext();

// // Create a AudioGainNode to control the main volume.
// var mainVolume = ctx.createGain();
// // Connect the main volume node to the context destination.
// mainVolume.connect(ctx.destination);

// // Create an object with a sound source and a volume control.
// var sound = {};
// sound.source = ctx.createBufferSource();
// sound.volume = ctx.createGain();

// // Connect the sound source to the volume control.
// sound.source.connect(sound.volume);
// // Hook up the sound volume control to the main volume.
// sound.volume.connect(mainVolume);

// // Make the sound source loop.
// sound.source.loop = true;

// // Load a sound file using an ArrayBuffer XMLHttpRequest.
// var request = new XMLHttpRequest();
// request.open("GET", 'Audio/NewWaveBossaNova', true);
// request.responseType = "arraybuffer";
// request.onload = function(e) {

//   // Create a buffer from the response ArrayBuffer.
//   ctx.decodeAudioData(this.response, function onSuccess(buffer) {
//     sound.buffer = buffer;

//     // Make the sound source use the buffer and start playing it.
//     sound.source.buffer = sound.buffer;
//     sound.source.start(ctx.currentTime);
//   }, function onFailure() {
//     alert("Decoding the audio buffer failed");
//   });
// };
// request.send();


