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

let moves = 0;
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
  console.log("w");
  tallBlock.style.display = "block";
  alert("Welcome to the A team");
}
function levelEight() {
  console.log("w");
  tallerBlock.style.display = "block";
  alert("Do you have anything better to do");
}

solveForMe.addEventListener("click", function(evt) {
  if (n == 4) {
    setTimeout(function() {
      topBlock.style.top = 180 + "px";
      topBlock.style.left = dR / 2 + "px";
      // Move disc 1 from Src to Dst
    }, 10);
    setTimeout(function() {
      midBlock.style.left = dR + "px";
      midBlock.style.top = 120 + "px";
      // Move disc 1 from Dst to Aux
    }, 1000);
    setTimeout(function() {
      topBlock.style.top = 120 + "px";
      topBlock.style.left = dR + "px";
      // Move disc 1 from Src to Dst
    }, 2000);
    setTimeout(function() {
      bottomBlock.style.top = 50 + "px";
      bottomBlock.style.left = dR / 2 + "px";
    }, 3000);
  }
  if (n == 5) {
    setTimeout(function() {
      topBlock.style.top = 240 + "px";
      topBlock.style.left = dR + "px";
      // Move disc 1 from Src to Dst
    }, 10);
    // Move disc 2 from Src to Aux
    setTimeout(function() {
      midBlock.style.left = dR / 2 + "px";
      midBlock.style.top = 185 + "px";
      // Move disc 1 from Dst to Aux
    }, 1000);
    setTimeout(function() {
      topBlock.style.top = 185 + "px";
      topBlock.style.left = dR / 2 + "px";
      // Move disc 3 from Src to Dst
    }, 2000);
    setTimeout(function() {
      bottomBlock.style.top = 125 + "px";
      bottomBlock.style.left = dR + "px";
    }, 3000);

    // Move disc 1 from Aux to Src
    setTimeout(function() {
      topBlock.style.top = 120 + "px";
      topBlock.style.left = 0 + "px";
      // Move disc 2 from Aux to Dst
    }, 4300);
    setTimeout(function() {
      midBlock.style.top = 125 + "px";
      midBlock.style.left = dR + "px";
    }, 4800);

    // Move disc 1 from Src to Dst
    setTimeout(function() {
      topBlock.style.top = 123 + "px";
      topBlock.style.left = dR + "px";
      // Move disc 4 from Src to Aux
    }, 5000);
    setTimeout(function() {
      bigBlock.style.top = 60 + "px";
      bigBlock.style.left = dR / 2 + "px";
      // Move disc 1 from Dst to Aux
    }, 6000);
    setTimeout(function() {
      topBlock.style.top = 180 + "px";
      topBlock.style.left = dR / 2 + "px";
      // Move disc 2 from Dst to Src
    }, 7000);
    setTimeout(function() {
      midBlock.style.top = 120 + "px";
      midBlock.style.left = 0 + "px";
      // Move disc 1 from Aux to Src
    }, 8000);
    setTimeout(function() {
      topBlock.style.top = 125 + "px";
      topBlock.style.left = 0 + "px";
      // Move disc 3 from Dst to Aux
    }, 9000);
    setTimeout(function() {
      bottomBlock.style.top = 60 + "px";
      bottomBlock.style.left = dR / 2 + "px";
      // Move disc 1 from Src to Dst
    }, 10000);
    setTimeout(function() {
      topBlock.style.top = 240 + "px";
      topBlock.style.left = dR + "px";
      // Move disc 2 from Src to Aux
    }, 1100);
    setTimeout(function() {
      midBlock.style.top = 65 + "px";
      midBlock.style.left = dR / 2 + "px";
    }, 12000);
    setTimeout(function() {
      // Move disc 1 from Dst to Aux
      topBlock.style.top = 80 + "px";
      topBlock.style.left = dR / 2 + "px";
    }, 13000);
    setTimeout(function() {
      // Move disc 5 from Src to Dst
      biggerBlock.style.left = dR + "px";
      // Move disc 1 from Aux to Src
    }, 13000);
    setTimeout(function() {
      topBlock.style.top = 240 + "px";
      topBlock.style.left = 0 + "px";
      // Move disc 2 from Aux to Dst
    }, 14000);
    setTimeout(function() {
      midBlock.style.top = 120 + "px";
      midBlock.style.left = dR + "px";
    }, 15000);
    setTimeout(function() {
      // Move disc 1 from Src to Dst
      topBlock.style.top = 120 + "px";
      topBlock.style.left = dR + "px";
      // Move disc 3 from Aux to Src
    }, 16000);
    setTimeout(function() {
      bottomBlock.style.left = 0 + "px";
      bottomBlock.style.top = 120 + "px";
    }, 17000);
    setTimeout(function() {
      // Move disc 1 from Dst to Aux
      topBlock.style.top = 180 + "px";
      topBlock.style.left = dR / 2 + "px";
      // Move disc 2 from Dst to Src
    }, 18000);
    setTimeout(function() {
      midBlock.style.top = 120 + "px";
      midBlock.style.left = 0 + "px";
      // Move disc 1 from Aux to Src
    }, 19000);
    setTimeout(function() {
      topBlock.style.top = 120 + "px";
      topBlock.style.left = 0 + "px";
      // Move disc 4 from Aux to Dst
    }, 20000);
    setTimeout(function() {
      bigBlock.style.left = dR + "px";
      bigBlock.style.top = 0 + "px";
    }, 21000);
    setTimeout(function() {
      // Move disc 1 from Src to Dst
      topBlock.style.top = 120 + "px";
      topBlock.style.left = dR + "px";
    }, 22000);
    setTimeout(function() {
      // Move disc 2 from Src to Aux
      midBlock.style.top = 180 + "px";
      midBlock.style.left = dR / 2 + "px";
    }, 23000);
    setTimeout(function() {
      // Move disc 1 from Dst to Aux
      topBlock.style.top = 180 + "px";
      topBlock.style.left = dR / 2 + "px";
    }, 24000);
    setTimeout(function() {
      // Move disc 3 from Src to Dst
      bottomBlock.style.left = dR + "px";
      bottomBlock.style.top = 0 + "px";
    }, 25000);
    setTimeout(function() {
      // Move disc 1 from Aux to Src
      topBlock.style.top = 240 + "px";
      topBlock.style.left = 0 + "px";
    }, 26000);
    setTimeout(function() {
      // Move disc 2 from Aux to Dst
      midBlock.style.top = 0 + "px";
      midBlock.style.left = dR + "px";
    }, 27000);
    setTimeout(function() {
      // Move disc 1 from Src to Dst
      topBlock.style.top = 0 + "px";
      topBlock.style.left = dR + "px";
    }, 28000);
  }
});
