let song;
let button;
let buttonSave;
let amp;
let circles = [];
let circlesFilled = [];
let cnv;

function preload() {
  song = loadSound("music.mp3");
}

function setup() {
  cnv = createCanvas(794 * 1.5, 560 * 1.5);
  // pixelDensity(3);
  button = createButton("play song");
  button.addClass('play-btn');
  buttonSave = createButton("Save");
  buttonSave.addClass('save-btn');

  button.mousePressed(togglePlaying);
  background(0);

  // console.log('button', button)
  // button.addClass('tamar')
  console.log('cnv', cnv)


  line = new Linedraw();
  straightLine = new StraightLinedraw();
  amp = new p5.Amplitude();

  for (let i = 0; i < random(5); i++) {
    circles[i] = new Circledraw();
  }

  for (let i = 0; i < random(5); i++) {
    circlesFilled[i] = new CircleFilldraw();
  }

}

function onTry() {
  // let elCanvas = document.querySelector('#defaultCanvas0');
  let elCanvas = document.querySelector('main');
  elCanvas.classList.add('test');
  // elCanvas.scrollTo({
  //   top: 100,
  //   left: 100,
  //   behavior: 'smooth'
  // })
  console.log('elCanvas', elCanvas);

  let elBody = document.querySelector('body');
  // const newDiv = document.createElement("div");
  elBody.scrollTo({
    bottom: 0,
    left: 100,
    behavior: 'smooth'
  })

}

function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    // song.setVolume(0.5);
    button.html("pause");
  }
  else {
    song.pause();
    button.html("play");
  }
}

function draw() {
  let vol = amp.getLevel();
  let len = song.duration();
  let t = random(len);
  if (song.isPlaying()) {
    line.show();
    line.move();
    straightLine.show();
    straightLine.move();

    for (let i = 0; i < circles.length; i++) {
      let x = 100 + 100 * i;
      let y = 500 + 40 * i;
      circles[i].move(x, y);
      circles[i].show();
    }

    for (let i = 0; i < circlesFilled.length; i++) {
      let x = 1 + i * 100;
      let y = 200 + i * 200;
      circlesFilled[i].move(x, y, 1);
    }

    if (vol >= 0.55) {
      stroke(255);

      circlesFilled[0].move(random(width), random(height), random(0.01, 2));
    }

  }
  buttonSave.mousePressed(imageSave);
}

function imageSave() {
  save('score.jpg');
}

class Circledraw {
  constructor(x, y) {
    this.r = random(50, 100);
    this.x = x;
    this.y = y;
  }

  show() {
    stroke(255);
    strokeWeight(2);
    point(this.x, this.y);
  }

  move(x, y) {
    // console.log("");
    let nFrames = 200;
    let timing = (frameCount) / nFrames;
    this.x = x - this.r * cos(TWO_PI * timing);
    this.y = y - this.r * sin(TWO_PI * timing);
  }


}

class Linedraw {
  constructor() {
    this.x = 0;
    this.y = random(0, height);
  }

  show() {
    stroke(255);
    strokeWeight(1);
    point(this.x, this.y);
  }

  move() {
    this.x++;
    if (this.x > random(0, width)) {
      this.y = this.y - tan(random(height / random(1, 3), height));
    }
    if (this.x > width) {
      this.x = 0;
      this.y = random(0, height);
    }
    if (this.y > height) {
      this.y = 0;
      this.y++;
    }
  }
}

class StraightLinedraw {
  constructor() {
    this.x = 0;
    this.y = random(0, height);
  }

  show() {
    stroke(255);
    strokeWeight(1);
    point(this.x, this.y);
  }

  move() {
    this.x++;
    if (this.x > width) {
      this.x = 0;
      this.y = random(0, height);
    }
  }
}

class CircleFilldraw {
  constructor() {
  }

  move(x, y, z) {
    stroke(255);
    noFill();
    beginShape();
    for (let i = 0; i < 360 * 2; i++) {
      this.r = random(0, 70);
      this.x = x + this.r * cos(i);
      this.y = y + this.r * sin(i * z);
      point(this.x, this.y);
      endShape();
    }
  }
}