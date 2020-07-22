//https://editor.p5js.org/Porito/sketches/6Y53xwSWJw
//https://editor.p5js.org/Porito/sketches/0cGVhG3rn

/**
 * @example osc
 */

const osc = new Tone.Oscillator(440, 'triangle');

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(223, 180, 76);

  osc.toDestination();
}

function keyPressed() {
  Tone.start();
  osc.start();
  background(155, 41, 21);
}

function keyReleased() {
  osc.stop();
  background(223, 180, 76);
}

/**
 *  @example osc + filter
 */

// const osc = new Tone.Oscillator(440, 'triangle');
// const filter = new Tone.Filter(20, 'bandpass');

// osc.connect(filter);
// filter.toDestination();

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   background(223, 180, 76);
// }

// function draw() {
//   const freq = map(mouseX, 0, width, 10, 22050);

//   filter.set({ frequency: freq });
//   // filter.frequency.rampTo(freq);
// }

// function keyPressed() {
//   Tone.start();
//   osc.start();
//   background(155, 41, 21);
// }

// function keyReleased() {
//   osc.stop();
//   background(223, 180, 76);
// }

/**
 *  @example osc + filter + env
 */

// const osc = new Tone.Oscillator(440, 'triangle');
// const filter = new Tone.Filter(261, 'lowpass');
// const env = new Tone.AmplitudeEnvelope({
//   attack: 0.2,
//   decay: 0.1,
//   sustain: 0.5,
//   release: 0.4,
// });

// osc.start();
// osc.connect(env);
// env.connect(filter);
// filter.toDestination();

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   background(223, 180, 76);
// }

// function keyPressed() {
//   Tone.start();
//   env.triggerAttack();
//   background(155, 41, 21);
// }

// function keyReleased() {
//   env.triggerRelease();
//   background(223, 180, 76);
// }
