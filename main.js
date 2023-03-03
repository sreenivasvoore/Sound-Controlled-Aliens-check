// Link for Teachable Machine: https://teachablemachine.withgoogle.com/models/xIJV5bDlS/

function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true  });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/xIJV5bDlS/model.json", modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}