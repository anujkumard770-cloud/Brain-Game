// // KEY MAP
// const keyMap = {
//   1: "green",
//   2: "red",
//   3: "yellow",
//   4: "blue",
// };

// let buttonColors = ["green", "red", "yellow", "blue"];
// let gamePattern = [];
// let userClickedPattern = [];
// let started = false;
// let level = 0;

// // START GAME
// document.addEventListener("keypress", function () {
//   if (!started) {
//     nextSequence();
//     started = true;
//   }
// });

// // USER KEY PRESS INPUT
// //   document.addEventListener("keydown", function(event) {
// //     let key = event.key;

// //     if (keyMap[key]) {
// //       let userColor = keyMap[key];
// //       userClickedPattern.push(userColor);

// //       animatePress(userColor);
// //       playSound(userColor);
// //       checkAnswer(userClickedPattern.length - 1);
// //     }
// //   });

// // 1. Ek common function bana lo jo saari operations handle karega
// function handlePlayerAction(userColor) {
//   userClickedPattern.push(userColor);
//   animatePress(userColor);
//   playSound(userColor);
//   checkAnswer(userClickedPattern.length - 1);
// }

// // 2. Keyboard keydown event
// document.addEventListener("keydown", function (event) {
//   let key = event.key;
//   if (keyMap[key]) {
//     handlePlayerAction(keyMap[key]);
//   }
// });

// // 3. Mouse click event (Agar aap jQuery use kar rahe hain)
// $(".btn").click(function () {
//   let userColor = $(this).attr("id"); // ya jo bhi attribute ya class se color mil raha ho
//   handlePlayerAction(userColor);
// });

// // CHECK ANSWER
// function checkAnswer(currentLevel) {
//   if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
//     if (userClickedPattern.length === gamePattern.length) {
//       setTimeout(nextSequence, 1000);
//     }
//   } else {
//     playSound("wrong");
//     document.body.classList.add("game-over");
//     document.getElementById("level-title").textContent =
//       "Game Over! Press Any Key to Restart";

//     setTimeout(() => {
//       document.body.classList.remove("game-over");
//     }, 200);

//     startOver();
//   }
// }

// // NEXT SEQUENCE
// function nextSequence() {
//   userClickedPattern = [];
//   level++;
//   document.getElementById("level-title").textContent = "Level " + level;

//   let randomNumber = Math.floor(Math.random() * 4);
//   let randomChosenColor = buttonColors[randomNumber];
//   gamePattern.push(randomChosenColor);

//   let button = document.getElementById(randomChosenColor);
//   button.style.opacity = "0.3";

//   setTimeout(() => {
//     button.style.opacity = "1";
//   }, 200);

//   playSound(randomChosenColor);
// }

// // SOUND
// function playSound(name) {
//   let audio = new Audio("sounds/" + name + ".mp3");
//   audio.play();
// }

// // ANIMATION
// function animatePress(color) {
//   let activeButton = document.getElementById(color);
//   activeButton.classList.add("pressed");

//   setTimeout(() => {
//     activeButton.classList.remove("pressed");
//   }, 200);
// }

// // RESET
// function startOver() {
//   level = 0;
//   gamePattern = [];
//   started = false;
// }




// KEY MAP
const keyMap = {
  1: "green",
  2: "red",
  3: "yellow",
  4: "blue",
};

let buttonColors = ["green", "red", "yellow", "blue"];
let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;

// START GAME (Press any key to start)
document.addEventListener("keypress", function () {
  if (!started) {
    nextSequence();
    started = true;
  }
});

// 1. Common function for player actions (Keyboard or Mouse)
function handlePlayerAction(userColor) {
  userClickedPattern.push(userColor);
  animatePress(userColor);
  playSound(userColor);
  checkAnswer(userClickedPattern.length - 1);
}

// 2. Keyboard keydown event
document.addEventListener("keydown", function (event) {
  let key = event.key;
  if (keyMap[key]) {
    handlePlayerAction(keyMap[key]);
  }
});

// 3. Mouse click event (Pure Vanilla JavaScript - No jQuery required)
document.querySelectorAll(".btn").forEach(function (button) {
  button.addEventListener("click", function () {
    let userColor = this.id; // Button ki id (green, red, yellow, blue)
    handlePlayerAction(userColor);
  });
});

// CHECK ANSWER
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(nextSequence, 1000);
    }
  } else {
    playSound("wrong");
    document.body.classList.add("game-over");
    document.getElementById("level-title").textContent =
      "Game Over! Press Any Key to Restart";

    setTimeout(() => {
      document.body.classList.remove("game-over");
    }, 200);

    startOver();
  }
}

// NEXT SEQUENCE
function nextSequence() {
  userClickedPattern = [];
  level++;
  document.getElementById("level-title").textContent = "Level " + level;

  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  let button = document.getElementById(randomChosenColor);
  if (button) {
    button.style.opacity = "0.3";
    setTimeout(() => {
      button.style.opacity = "1";
    }, 200);
  }

  playSound(randomChosenColor);
}

// SOUND
function playSound(name) {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play().catch(err => console.log("Audio play error:", err));
}

// ANIMATION
function animatePress(color) {
  let activeButton = document.getElementById(color);
  if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(() => {
      activeButton.classList.remove("pressed");
    }, 200);
  }
}

// RESET
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}