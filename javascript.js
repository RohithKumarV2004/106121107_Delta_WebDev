alert("Game instructions: Follow the blinking of tiles and select them in the correct sequence to increase your score.");
alert("Press any key to start playing the game");
var buttonNumbers = ["key1", "key2", "key3", "key4", "key5", "key6", "key7", "key8", "key9", "key10", "key11", "key12", "key13", "key14", "key15", "key16"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;
var k = 1000;

document.querySelector("body").addEventListener("keydown", function() {
  if (!started) {
    document.querySelector("#level-title").innerHTML = "Game started";
    nextSequence();
    started = true;
  }

})
for (var i = 0; i < (document.querySelectorAll(".btn").length); i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function() {
    var userChosenKey = this.getAttribute("id");
    userClickedPattern.push(userChosenKey);
    console.log(userClickedPattern);
    animatePress(userChosenKey);
    checkAnswer(userClickedPattern.length - 1);
    userChosenKey.clickno = 1;
  });
}
function checkAnswer(currentLevel) {

  if (gamePattern[currentLevel] === (userClickedPattern[currentLevel])){
    console.log("success");

    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);

    }

  }else{
    
    console.log("wrong");
    document.querySelector("#level-title").innerHTML = ("Game Over, your score is " + (level-1) + ", Press any key to restart the game");
    alert("Game Over!");
    alert("Press any ket to restart the game");
    startOver();
  }

}
function nextSequence() {
  userClickedPattern = [];

  level++;
  document.querySelector("#level-title").innerHTML = ("level" + level);
  var randomNumber = Math.floor(Math.random() * 16);
  var randomChosenKey = buttonNumbers[randomNumber];
  gamePattern.push(randomChosenKey);

  for (let j = 0, k = 50; j < gamePattern[j].length; j++, k += 180) {
    setTimeout(function() {
      animatePress(gamePattern[j]);
    }, k);
  }

}

function animatePress(k) {
  var activeButton = document.querySelector("." + k);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
