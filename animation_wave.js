  animation.enqueue({
    easing: easing,
    duration: 2000,
    cuePoints: [
      0, delay/duration,(delay*2)/duration, (delay*3)/duration, (delay*4)/duration, (delay*5)/duration,
      //every led cuepoints is "shifted"
      0.5,0.5+  delay/duration,0.5+ (delay*2)/duration,0.5+  (delay*3)/duration,0.5+  (delay*4)/duration,0.5+  (delay*5)/duration,
      1
    ],
    keyFrames: [
      //led1 normal
      [{value: 0}, null, null, null, null, null, //cuepoint 0
      {value: 255},null, null, null, null, null, //cuepoint in the middle
    {value: 0}], //cuepoint 1
    //led2 shifted by delay
      [tweenCalc(0.5+  delay/duration ,delay/duration, 1, easing,255, 0 ), {value: 0}, null, null, null, null, //cuepoint 0
      null, {value: 255}, null, null, null, null, //cuepoint in the middle
     {value: tweenCalc(0.5+  delay/duration ,delay/duration, 1, easing,255, 0 )}],  //cuepoint 1

//led3 shifted by delay*2
      [tweenCalc(0.5+  (delay*2)/duration ,(delay*2)/duration, 1, easing,255, 0 ), null, {value: 0},null, null, null,
      null, null, {value: 255}, null, null, null,
    {value:tweenCalc(0.5+  (delay*2)/duration ,(delay*2)/duration, 1, easing,255, 0 )}],
//led4 shifted by delay*3
      [tweenCalc(0.5+  (delay*3)/duration ,(delay*3)/duration, 1, easing,255, 0 ), null, null, {value: 0},null, null,
      null, null, null, {value: 255},null, null,
    {value: tweenCalc(0.5+  (delay*3)/duration ,(delay*3)/duration, 1, easing,255, 0 )}],
//led5 shifted by delay*4
      [tweenCalc(0.5+  (delay*4)/duration ,(delay*4)/duration, 1, easing,255, 0 ), null, null, null, {value: 0}, null,
      null, null, null, null, {value: 255}, null,
    {value:tweenCalc(0.5+  (delay*4)/duration ,(delay*4)/duration, 1, easing,255, 0 )}],
//led6 shifted by delay*5
      [tweenCalc(0.5+  (delay*5)/duration ,(delay*5)/duration, 1, easing,255, 0 ), null, null, null, null, {value: 0},
      null, null, null, null, null , {value: 255},
    {value:tweenCalc(0.5+  (delay*5)/duration ,(delay*5)/duration, 1, easing,255, 0 )}],
    ],
    metronomic: false,
    loop: true

  })


 function tweencalc (startCue, endCue, nowCue, easing,left, right ) {

  var tween = {
    duration: null,
    progress: null
  };



    // Find our progress for the current tween
    tween.duration = (endCue - startCue)
    tween.progress = (nowCue - startCue) / tween.duration;

    // Catch divide by zero
    /*if (!Number.isFinite(tween.progress)) {
      tween.progress = this.reverse ? 0 : 1;
    }*/

    // Apply tween easing to tween.progress
    // to do: When reverse replace inFoo with outFoo and vice versa. skip inOutFoo
    tween.progress = ease[easing](tween.progress);

    // Calculate this tween value
    var calcValue;


      calcValue = (right - left) *
      tween.progress + left;

    return calcValue;

};
