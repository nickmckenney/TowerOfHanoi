let blockSetter;

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
let arr2 = [];
let arr3 = [];
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
      // console.log("6");
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
  moves += 0.5;
  h4.innerText = "MOVES " + moves;
});
// CONNOR GAVE ME THE IDEA OF USING ONLY 3 EVENT LISTNERS INSTEAD OF ME USING 6. MADE CODE LESS COMPLICATED AND MORE DRY
// CONNOR GAVE ME THE IDEA OF USING ONLY 3 EVENT LISTNERS INSTEAD OF ME USING 6. MADE CODE LESS COMPLICATED AND MORE DRY

mid.addEventListener("click", function(evt) {
  if (blockInPlay.length == 0 || mid.childElementCount == 0) {
    evt.preventDefault();
    if (blockInPlay.length !== 0 || mid.childElementCount !== 0) {
      if (blockInPlay.length == 0) {
        blockInPlay.push(mid.lastElementChild);
        mid.removeChild(mid.lastElementChild);
      } else {
        mid.insertBefore(blockInPlay[0], mid.lastchildElement);
        blockInPlay.pop();
      }
    }
  } else if (blockInPlay[0].innerText > mid.lastElementChild.innerText) {
    evt.preventDefault();
    if (blockInPlay.length !== 0 || mid.childElementCount !== 0) {
      if (blockInPlay.length == 0) {
        blockInPlay.push(mid.lastElementChild);
        mid.removeChild(mid.lastElementChild);
      } else {
        mid.insertBefore(blockInPlay[0], mid.lastchildElement);
        blockInPlay.pop();
      }
    }
  }
  moves += 0.5;
  h4.innerText = "MOVES " + moves;
});

rightB.addEventListener("click", function(evt) {
  if (blockInPlay.length == 0 || rightB.childElementCount == 0) {
    evt.preventDefault();
    if (blockInPlay.length !== 0 || rightB.childElementCount !== 0) {
      if (blockInPlay.length == 0) {
        blockInPlay.push(rightB.lastElementChild);
        rightB.removeChild(rightB.lastElementChild);
      } else {
        rightB.insertBefore(blockInPlay[0], rightB.lastchildElement);
        blockInPlay.pop();
      }
    }
  } else if (blockInPlay[0].innerText > rightB.lastElementChild.innerText) {
    evt.preventDefault();
    if (blockInPlay.length !== 0 || rightB.childElementCount !== 0) {
      if (blockInPlay.length == 0) {
        blockInPlay.push(rightB.lastElementChild);
        rightB.removeChild(rightB.lastElementChild);
      } else {
        rightB.insertBefore(blockInPlay[0], rightB.lastchildElement);
        blockInPlay.pop();
      }
    }
  }

  if (rightB.childElementCount == n) {
    finisher();
  }
  moves += 0.5;
  h4.innerText = "MOVES " + moves;
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
  evt.preventDefault();
});
