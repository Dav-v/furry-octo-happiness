 animation.enqueue({
    easing: easing,
    duration: 2000,
    cuePoints: [
     [0, 0.4, 1 ],          // cuePoints for led1
     [0, 0.2, 0.4, 0.8, 1],  // cuePoints for led2
     [0, 0.6, 0.7, 1]       // cuePoints for led3 
    ],
    keyFrames: [
     [{value:255}, {value:137}, {value:255} ],                            // keyframes for led 1
     [{value:255}, {value:0},   {value:255}, {value:129}, {value:255} ],    // keyframes for led 2
     [{value:0},   {value:255}, {value:0},   {value:255} ]                  // keyframes for led 3
    ],
    metronomic: false,
    loop: true

  })
