
var buttonElement1 = document.getElementById('B1')
buttonElement1.addEventListener("mouseenter", play1);
buttonElement1.addEventListener("click", play1);

var buttonElement2 = document.getElementById('B2')
buttonElement2.addEventListener("mouseenter", play2);
buttonElement2.addEventListener("click", play2);

var buttonElement3 = document.getElementById('B3')
buttonElement3.addEventListener("mouseenter", play3);
buttonElement3.addEventListener("click", play3);



function play1() {
    var audio = document.getElementById("audio1");
    audio.play();
  }
  function play2() {
    var audio = document.getElementById("audio2");
    audio.play();
  }
  function play3() {
    var audio = document.getElementById("audio3");
    audio.play();
  }






