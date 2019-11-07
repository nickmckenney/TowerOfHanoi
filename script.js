let blockSetter;
let dR = 935;
let dM = 460;
let dL = 0;
let dDD = -120;
let topBlock = document.querySelector(".topCenterB");
let midBlock = document.querySelector(".midCenterB");
let bigBlock = document.querySelector(".bigBlock");
let biggerBlock = document.querySelector(".biggerBlock");
let bigBodBlock = document.querySelector(".bigBodBlock");
let bottomBlock = document.querySelector(".bottomCenterB");
let tallBlock = document.querySelector(".tallBlock");
let tallerBlock = document.querySelector(".tallerBlock");
const leftB = document.querySelector(".leftCenterBlock");
let solveForMe = document.querySelector(".solveForMe");
const mid = document.querySelector(".middle");
const rightB = document.querySelector(".rightCenterBlock");
let h3 = document.querySelector("h3");
let center = document.querySelector(".centerBlock");
let h4 = document.querySelector("h4");
let levelUp = document.querySelector(".levelUp");
let n = 3;
let arr1 = [];
let blockInPlay = [];
arr1.push(bottomBlock);
arr1.push(midBlock);
arr1.push(topBlock);
let z = 0;
levelUp.addEventListener("click", function(evt) {
  n += 1;
  if (n == 4) {
    levelFour();
    z = 4;
  }
  if (n == 5) {
    levelFive();
    z = 5;
  }
  if (n == 6) {
    levelSix();
    z = 6;
  }
  if (n == 7) {
    levelSeven();
  }
  if (n == 8) {
    levelEight();
  }
});
let x = leftB.lastElementChild.innerText;

leftB.addEventListener("click", function(evt) {
  if (blockInPlay.length == 0 || leftB.childElementCount == 0) {
    evt.preventDefault();
    console.log("1");

    if (blockInPlay.length !== 0 || leftB.childElementCount !== z) {
      console.log("2");
      if (blockInPlay.length == 0) {
        console.log("3");
        blockInPlay.push(leftB.lastElementChild);
        leftB.removeChild(leftB.lastElementChild);
        z -= 1;
      } else {
        console.log("4");
        leftB.insertBefore(blockInPlay[0], leftB.lastchildElement);
        blockInPlay.pop();
      }
    }
  } else if (
    Number(blockInPlay[0].innerText) > Number(leftB.lastElementChild.innerText)
  ) {
    console.log("5");
    evt.preventDefault();
    if (blockInPlay.length !== 0 || leftB.childElementCount !== z) {
      if (blockInPlay.length == 0) {
        blockInPlay.push(leftB.lastElementChild);
        leftB.removeChild(leftB.lastElementChild);
        z += 1;

        console.log("7");
      } else {
        console.log("8");
        leftB.insertBefore(blockInPlay[0], leftB.lastchildElement);
        blockInPlay.pop();
      }
    }
  }
});

mid.addEventListener("click", function(evt) {
  if (blockInPlay.length == 0 || mid.childElementCount == 0) {
    evt.preventDefault();
    console.log("1");

    if (blockInPlay.length !== 0 || mid.childElementCount !== z) {
      console.log("2");
      if (blockInPlay.length == 0) {
        console.log("3");
        blockInPlay.push(mid.lastElementChild);
        mid.removeChild(mid.lastElementChild);
        z -= 1;
      } else {
        console.log("4");
        mid.insertBefore(blockInPlay[0], mid.lastchildElement);
        blockInPlay.pop();
        z -= 1;
      }
    }
  } else if (
    Number(blockInPlay[0].innerText) > Number(mid.lastElementChild.innerText)
  ) {
    console.log("5");
    evt.preventDefault();
    if (blockInPlay.length !== 0 || mid.childElementCount !== z) {
      // console.log("6");
      if (blockInPlay.length == 0) {
        blockInPlay.push(mid.lastElementChild);
        mid.removeChild(mid.lastElementChild);
        z += 1;

        console.log("7");
      } else {
        console.log("8");
        mid.insertBefore(blockInPlay[0], mid.lastchildElement);
        blockInPlay.pop();
      }
    }
  }
});

rightB.addEventListener("click", function(evt) {
  if (blockInPlay.length == 0 || rightB.childElementCount == 0) {
    evt.preventDefault();
    console.log("1");

    if (blockInPlay.length !== 0 || rightB.childElementCount !== z) {
      console.log("2");
      if (blockInPlay.length == 0) {
        console.log("3");
        blockInPlay.push(rightB.lastElementChild);
        rightB.removeChild(rightB.lastElementChild);
        z -= 1;
        console.log("TEST!");
      } else {
        console.log("4");
        rightB.insertBefore(blockInPlay[0], rightB.lastchildElement);
        blockInPlay.pop();
        z += 1;
      }
    }
  } else if (
    Number(blockInPlay[0].innerText) > Number(rightB.lastElementChild.innerText)
  ) {
    console.log("5");
    evt.preventDefault();
    if (blockInPlay.length !== 0 || rightB.childElementCount !== z) {
      // console.log("6");
      console.log("66");
      if (blockInPlay.length == 0) {
        blockInPlay.push(rightB.lastElementChild);
        rightB.removeChild(rightB.lastElementChild);
        z += 1;
        console.log("Test2");

        console.log("7");
      } else {
        console.log("8");
        rightB.insertBefore(blockInPlay[0], rightB.lastchildElement);
        blockInPlay.pop();
      }
    }
  }

  if (rightB.childElementCount == n) {
    finisher();
  }
});
var secs = 0;
function finisher() {
  alert("YOUR DONE");
  finisher = true;

  if (moves >= Math.pow(2, n)) {
    alert("YOU CAN DO BETTER");
  }
}

window.onload = function() {
  //GOT THIS FROM A WEBSITE https://stackoverflow.com/questions/34278816/how-to-add-a-timer-in-html5-and-javascript
  var id = setInterval(function() {
    secs++;
    h3.innerText = "TIMER " + secs;
    if (finisher == true) {
      clearInterval(id); //GOT THIS FROM A WEBSITE https://stackoverflow.com/questions/34278816/how-to-add-a-timer-in-html5-and-javascript
      h3.innerText = "Total Time: " + secs + " seconds";
    }
  }, 1000);
};
function levelFour() {
  bigBlock.style.display = "block";
}
function levelFive() {
  biggerBlock.style.display = "block";
}
function levelSix() {
  bigBodBlock.style.display = "block";
}
function levelSeven() {
  tallBlock.style.display = "block";
}
function levelEight() {
  tallerBlock.style.display = "block";
}
