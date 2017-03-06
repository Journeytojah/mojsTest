'use strict';


const yCurve = new MojsCurveEditor({ name: 'yOffset'});

var square1 = new mojs.Html( {
  el: '#js-el',
  y: {[-300]:-300, curve: yCurve.getEasing()},
  duration:1000,
});




var timeline = new mojs.Timeline({ speed: .63 });
timeline.add(square1);

new MojsPlayer({ add: timeline, isPlaying: true, isRepeat: true });
