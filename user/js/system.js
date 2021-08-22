// Classifier Variable
let classifier;
// Model URL
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/AsVNrCqaq/';

// Video
let video;
let flippedVideo;
// To store the classification
let label = "";

// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}

function setup() {
  createCanvas(320, 260);
  // Create the video
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();

  flippedVideo = ml5.flipImage(video);
  // Start classifying
  classifyVideo();
}

function draw() {
  background(0);
  // Draw the video
  image(flippedVideo, 0, 0);

  // Draw the label
  fill(255);
  textSize(16);
  textAlign(CENTER);
  text(label, width / 2, height - 4);
  document.getElementById('result').value = label;
  // console.log(label)
}

// Get a prediction for the current video frame
function classifyVideo() {
  flippedVideo = ml5.flipImage(video)
  classifier.classify(flippedVideo, gotResult);
  flippedVideo.remove();

}

// When we get a result
function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  label = results[0].label;
  // Classifiy again!
  classifyVideo();
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxtaWQr-q7zQLrVYvBDtO2lBp9On1I6N8L1VgZvpuRvi5PA_pE-lMhTikvtZHP6xI00Qw/exec'
  const form = document.forms['google-sheet']

  form.addEventListener('submit', e => {
    window.scrollTo(0, 0);
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => $("#form_alerts").html("<div class='alert alert-success'>ส่งข้อมูลสำเร็จ...ขอบคุณสำหรับการให้ข้อมูล</div>"))
    .catch(error => $("#form_alerts").html("<div class='alert alert-danger'>ส่งข้อมูลไม่สำเร็จ ลองใหม่อีกครั้ง</div>"))
  })