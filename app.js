const keys = Array.from(document.querySelectorAll(".key"));
var audio = new Audio('./pop.wav');

window.addEventListener("keydown", function (e) {
  const keyC = e.keyCode;
  if (keyC < 91 && keyC > 64) {
    audio.paused ? audio.play() : audio.currentTime = 0;
    keys.forEach((key) => {
      function myStopFunction() {
        key.classList.remove("hover");
      }
      const num = key.dataset.number;
      if (keyC == num) {
        key.classList.add("hover");
        setTimeout(myStopFunction, 100);
      }
    });
  }
});
