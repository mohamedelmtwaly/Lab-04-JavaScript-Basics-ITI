//SELECT ELEMENT FROM DOM
var display = document.getElementById("displayContainer");

var hours = 0;
var minutes = 0;
var seconds = 0;

var timerId = null;
var isRunning = false;

function updateDisplay() {
  var h = "";
  var m = "";
  var s = "";

  //setting display
  if (hours < 10) {
    h = "0" + hours;
  } else {
    h = "" + hours;
  }

  if (minutes < 10) {
    m = "0" + minutes;
  } else {
    m = "" + minutes;
  }

  if (seconds < 10) {
    s = "0" + seconds;
  } else {
    s = "" + seconds;
  }
  var timeDisplay = h + ":" + m + ":" + s;
  display.innerHTML = timeDisplay;
}

function startWatch() {
  timerId = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }

    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    updateDisplay();
  }, 1000);
}

function pauseWatch() {
  clearInterval(timerId);
  timerId = null;
}

function clearWatch() {
  pauseWatch();
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateDisplay();
}
