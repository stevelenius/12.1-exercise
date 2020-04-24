// 12.1-exercise.js
//
// Constructs a beat box of five piano keys
// that play five different beat loops when clicked
//
// Based on code found at <editor.p5js.org/p5/sketches/Hello_P5:_song>
// and at <p5js.org/examples/sound-load-and-play-sound.html>
//

// initial declaration for variables
let song1;
let song2;
let song3;
let song4;
let song5;

function preload() {
// Lemonade Speedster font from Chankfonts (Thanks Chank!)
    myFont = loadFont('assets/LemonadeSpeedster.otf');
    myFontAk = loadFont('assets/AkzidenzGrotesk-Extended.otf');
}

function setup() {
  createCanvas(720, 400);

// "Bell beats" loop created by esistnichtsoernst (source: Freesound.org)
  song1 = loadSound('sounds/bell.mp3');
// "From the clouds (loopable)" created by MSFX (source: Freesound.org)
  song2 = loadSound('sounds/clouds.mp3');
// "MusicLoop1" created by senkoro (source: Freesound.org)
  song3 = loadSound('sounds/loop.mp3');
// Loop created from Symplesound's "Purple Drums" Ableton loops 
// honoring Prince
  song4 = loadSound('sounds/prince.mp3');
//"Tempo" loop created by B-Sean (source: Freesound.org)
  song5 = loadSound('sounds/tempo.mp3');
  textFont(myFont);
  stroke(255, 128, 255)
}

function draw() {

  // Draw a keyboard

  // The width for each key
  let w = width / 5;
  for (let i = 0; i < 5; i++) {
    let x = i * w;
    // If the mouse is over the key
    if (mouseX > x && mouseX < x + w && mouseY < height) {
      // If we're clicking (darkest fill)
      if (mouseIsPressed) {
        fill(255,160,255);
      // Or just rolling over (slightly lighter fill)
      } else {
        fill(255,200,255);
      }
    // Or fill with this if not clicked or rolled over (lightest fill) 
    } else {
      fill(255,230, 255);
    }

    // Draw the key
    rect(x, 0, w-1, height-1);
    // Most intense fill for text
    fill(255,0,255);
    // add text to canvas
    textFont(myFont);
    textSize(90);
    textAlign(CENTER);
    text('BEAT BOX', 360, 340);
    textFont(myFontAk);
    textSize(18);
    text('BELL', 72, 380);
    text('CLOUD', 216, 380);
    text('LOOP', 360, 380);
    text('PRINCE', 504, 380);
    text('TEMPO', 648, 380);
  }
}

// When we click
function mousePressed(event) {
  if(event.button == 0 && event.clientX < width && event.clientY < height) {
    // Map mouse to the key index
    let key = floor(map(mouseX, 0, width, 0, 5));
// for each key: if this song is playing, stop it;
// if this song is not playing, start it;
// if another song is playing, stop it and start playing this one
    if (key===4) {
        if (song5.isPlaying()) {
            song5.stop();
        } else {
        song1.stop();
        song2.stop();
        song3.stop();
        song4.stop();
        song5.play();
        } 
    } else if (key===3) {
        if (song4.isPlaying()) {
            song4.stop();
        } else {
        song5.stop();
        song3.stop();
        song2.stop();
        song1.stop();
        song4.play();
        }
    } else if (key===2) {
        if (song3.isPlaying()) {
            song3.stop();
        } else {
        song5.stop();
        song4.stop();
        song2.stop();
        song1.stop();
        song3.play();
        }
    } else if (key===1) {
        if (song2.isPlaying()) {
            song2.stop();
        } else {
        song5.stop();
        song4.stop();
        song3.stop();
        song1.stop();
        song2.play();
        }
    } else {
        if (song1.isPlaying()) {
            song1.stop();
        } else {
        song5.stop();
        song4.stop();
        song3.stop();
        song2.stop();
        song1.play();
        }
    }
  }
}
