function handleClick(decide) {
  if (decide == "w") {
    var audio = new Audio("sounds/tom-1.mp3");

    audio.play();
  } else if (decide == "a") {
    var audio = new Audio("sounds/tom-2.mp3");

    audio.play();
  } else if (decide == "s") {
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
  } else if (decide == "d") {
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
  } else if (decide == "j") {
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
  } else if (decide == "k") {
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
  } else if (decide == "l") {
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
  }
}

for (var i = 0; i <= 6; i++) {
  var keys = document.querySelectorAll(".btn");
  keys[i].addEventListener("click", function() {
    handleClick(this.innerHTML);
    animate(this.innerHTML);
  });
}
document.addEventListener("keydown", function(key) {
  handleClick(key.key);
  animate(key.key);
});
function animate(currentKey) {
  document.querySelector("." + currentKey + "-key").classList.add("pressed");
  setTimeout(function() {
    document
      .querySelector("." + currentKey + "-key")
      .classList.remove("pressed");
  }, 100);
}
