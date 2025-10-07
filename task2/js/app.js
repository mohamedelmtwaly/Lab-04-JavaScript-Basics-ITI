////// FUNCTIONS AND DOM HANDLING //////

//SELECT DOM ELEMENT
var btnShowMessage = document.querySelector(".btn-show-mess");

//Show MESSAGE IN WINDOW
var message = "your message will be drived charby char !!";

function ShowMessage() {
  var i = 0;
  var msgElement = document.getElementById("msg");

  function typeWriter() {
    if (i < message.length) {
      msgElement.textContent += message.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }

  typeWriter();
}

//OPEN  WINDOW FOR MESSAGE

function openMessageWindow() {
  window.open("message.html", "message window", "width=400,height=300");
}
