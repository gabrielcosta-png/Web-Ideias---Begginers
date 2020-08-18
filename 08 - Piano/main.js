const keys = document.querySelectorAll(".key"),
  note = document.querySelector(".nowplaying"),
  hints = document.querySelectorAll(".hints");

function removeTransition(event) {
  if (event.propertyName !== "transform") return;
  this.classList.remove("playing");
}

function playsound(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`),
    key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

  if (!key) return;

  const keyNote = key.getAttribute("data-note");

  key.classList.add("playing");
  note.innerHTML = keyNote;
  audio.currentTime = 0;
  audio.play();
}

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playsound);
