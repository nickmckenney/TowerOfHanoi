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
});
// CONNOR GAVE ME THE IDEA OF USING ONLY 3 EVENT LISTNERS INSTEAD OF ME USING 6. MADE CODE LESS COMPLICATED AND MORE DRY
// CONNOR GAVE ME THE IDEA OF USING ONLY 3 EVENT LISTNERS INSTEAD OF ME USING 6. MADE CODE LESS COMPLICATED AND MORE DRY

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

let rightBlocks = 0;
let midBlocks = 0;
let leftBlocks = 3;

function hanoi(q, src, aux, dst) {
  // https://repl.it/@vaniananthuni/towers-of-hanoi-recursive-javascript
  // https://repl.it/@vaniananthuni/towers-of-hanoi-recursive-javascript
  if (q > 0) {
    // https://repl.it/@vaniananthuni/towers-of-hanoi-recursive-javascript
    hanoi(q - 1, src, dst, aux); // https://repl.it/@vaniananthuni/towers-of-hanoi-recursive-javascript
    console.log("Move disc " + n + " from " + src + " to " + dst);
    if (q == 1) {
      console.log("topBlock");
      if (dst == "Dst" && src == "Start") {
        if (rightBlocks == 0) {
          rightBlocks += 1;
          leftBlocks -= 1;
          if (leftBlocks == 0) {
            topBlock.style.left = dR + "px";
            topBlock.style.bottom = dDD + "px";
          } else if (leftBlocks == 1) {
            topBlock.style.left = dR + "px";
            topBlock.style.bottom = dDD / 2 + "px";
          } else {
            topBlock.style.bottom = 0 + "px";
          }
        } else if (rightBlocks == 1) {
          rightBlocks += 1;
          leftBlocks -= 1;
          topBlock.style.left = dR + "px";
          topBlock.style.bottom = dDD / 2 + "px";
        } else {
          rightBlocks += 1;
          leftBlocks -= 1;
          topBlock.style.left = dR + "px";
          topBlock.style.bottom = 0 + "px";
        }
      } else if (dst == "Dst" && src == "Middle") {
        if (rightBlocks == 0) {
          rightBlocks += 1;
          midBlocks -= 1;
          topBlock.style.left = dR / 2 + "px";
          topBlock.style.bottom = dDD + "px";
        } else if (rightBlocks == 1) {
          rightBlocks += 1;
          midBlocks -= 1;
          topBlock.style.left = dR / 2 + "px";
          topBlock.style.bottom = dDD / 2 + "px";
        } else {
          rightBlocks += 1;
          midBlocks -= 1;
          topBlock.style.left = dR / 2 + "px";
          topBlock.style.bottom = 0 + "px";
        }
      } else if (dst == "Start" && src == "Middle") {
        if (midBlocks == 0) {
          midBlocks -= 1;
          leftBlocks += 1;
          topBlock.style.left = dL + "px";
          topBlock.style.bottom = dDD + "px";
        } else if (midBlocks == 1) {
          leftBlocks += 1;
          midBlocks -= 1;
          topBlock.style.left = dL + "px";
          topBlock.style.bottom = dDD / 2 + "px";
        } else {
          leftBlocks += 1;
          midBlocks -= 1;
          topBlock.style.left = dL + "px";
          topBlock.style.bottom = 0 + "px";
        }
      } else if (dst == "Start" && src == "Dst") {
        if (midBlocks == 0) {
          rightBlocks -= 1;
          leftBlocks += 1;
          topBlock.style.left = dL + "px";
          topBlock.style.bottom = dDD + "px";
        } else if (midBlocks == 1) {
          leftBlocks += 1;
          rightBlocks -= 1;
          topBlock.style.left = dL + "px";
          topBlock.style.bottom = dDD / 2 + "px";
        } else {
          leftBlocks += 1;
          rightBlocks -= 1;
          topBlock.style.left = dL + "px";
          topBlock.style.bottom = 0 + "px";
        }
      } else if (dst == "Middle" && src == "Start") {
        if (midBlocks == 0) {
          midBlocks += 1;
          leftBlocks -= 1;
          topBlock.style.left = dM + "px";
          topBlock.style.bottom = dDD + "px";
        } else if (midBlocks == 1) {
          midBlocks += 1;
          leftBlocks -= 1;
          topBlock.style.left = dM + "px";
          topBlock.style.bottom = dDD / 2 + "px";
        } else {
          midBlocks += 1;
          leftBlocks -= 1;
          topBlock.style.left = dM + "px";
          topBlock.style.bottom = 0 + "px";
        }
      } else if (dst == "Middle" && src == "Dst") {
        if (midBlocks == 0) {
          midBlocks += 1;
          rightBlocks -= 1;
          topBlock.style.left = dM + "px";
          topBlock.style.bottom = dDD + "px";
        } else if (midBlocks == 1) {
          midBlocks += 1;
          rightBlocks -= 1;
          topBlock.style.left = dM + "px";
          topBlock.style.bottom = dDD / 2 + "px";
        } else {
          midBlocks += 1;
          rightBlocks -= 1;
          topBlock.style.left = dM + "px";
          topBlock.style.bottom = 0 + "px";
        }
      }
    } else if (q == 2) {
      console.log("midBlock");
      if (dst == "Dst" && src == "Start") {
        if (rightBlocks == 0) {
          rightBlocks += 1;
          leftBlocks -= 1;
          midBlock.style.left = dR + "px";
          midBlock.style.bottom = dDD / 2 + "px";
        } else if (rightBlocks == 1) {
          rightBlocks += 1;
          leftBlocks -= 1;
          midBlock.style.left = dR + "px";
          midBlock.style.top = 0 + "px";
        }
      } else if (dst == "Dst" && src == "Middle") {
        if (rightBlocks == 0) {
          rightBlocks += 1;
          midBlocks -= 1;
          midBlock.style.left = dR + "px";
          midBlock.style.bottom = dDD / 2 + "px";
        } else if (rightBlocks == 1) {
          rightBlocks += 1;
          midBlocks -= 1;
          midBlock.style.left = dR + "px";
          midBlock.style.top = 0 + "px";
        }
      } else if (dst == "Start" && src == "Middle") {
        if (midBlocks == 0) {
          midBlocks -= 1;
          leftBlocks += 1;
          midBlock.style.left = dL + "px";
          midBlock.style.bottom = dDD / 2 + "px";
        } else if (midBlocks == 1) {
          leftBlocks += 1;
          midBlocks -= 1;
          midBlock.style.left = dL + "px";
          midBlock.style.top = 0 + "px";
        }
      } else if (dst == "Start" && src == "Dst") {
        if (midBlocks == 0) {
          rightBlocks -= 1;
          leftBlocks += 1;
          midBlock.style.left = dL + "px";
          midBlock.style.bottom = dDD / 2 + "px";
        } else if (midBlocks == 1) {
          leftBlocks += 1;
          rightBlocks -= 1;
          midBlock.style.left = dL + "px";
          midBlock.style.top = 0 + "px";
        }
      } else if (dst == "Middle" && src == "Start") {
        if (midBlocks == 0) {
          midBlocks += 1;
          leftBlocks -= 1;
          midBlock.style.left = dM + "px";
          midBlock.style.bottom = dDD / 2 + "px";
        } else if (midBlocks == 1) {
          midBlocks += 1;
          leftBlocks -= 1;
          midBlock.style.left = dM + "px";
          midBlock.style.top = 0 + "px";
        }
      } else if (dst == "Middle" && src == "Dst") {
        if (midBlocks == 0) {
          midBlocks += 1;
          rightBlocks -= 1;
          midBlock.style.left = dM + "px";
          midBlock.style.bottom = dDD / 2 + "px";
        } else if (midBlocks == 1) {
          midBlocks += 1;
          rightBlocks -= 1;
          midBlock.style.left = dM + "px";
          midBlock.style.top = 0 + "px";
        }
      }
    } else if (q == 3) {
      console.log("topBlock");
      if (dst == "Dst" && src == "Start") {
        if (rightBlocks == 0) {
          rightBlocks += 1;
          leftBlocks -= 1;
          bottomBlock.style.left = dR + "px";
        } else if (rightBlocks == 1) {
          rightBlocks += 1;
          leftBlocks -= 1;
          bottomBlock.style.left = dR + "px";
        } else {
          rightBlocks += 1;
          leftBlocks -= 1;
          bottomBlock.style.left = dR + "px";
        }
      } else if (dst == "Dst" && src == "Middle") {
        if (rightBlocks == 0) {
          rightBlocks += 1;
          midBlocks -= 1;
          bottomBlock.style.left = dR + "px";
        } else if (rightBlocks == 1) {
          rightBlocks += 1;
          midBlocks -= 1;
          bottomBlock.style.left = dR + "px";
        } else {
          rightBlocks += 1;
          midBlocks -= 1;
          bottomBlock.style.left = dR + "px";
        }
      } else if (dst == "Start" && src == "Middle") {
        if (midBlocks == 0) {
          midBlocks -= 1;
          leftBlocks += 1;
          bottomBlock.style.left = dL + "px";
        } else if (midBlocks == 1) {
          leftBlocks += 1;
          midBlocks -= 1;
          bottomBlock.style.left = dL + "px";
        } else {
          leftBlocks += 1;
          midBlocks -= 1;
          bottomBlock.style.left = dL + "px";
        }
      } else if (dst == "Start" && src == "Dst") {
        if (midBlocks == 0) {
          rightBlocks -= 1;
          leftBlocks += 1;
          bottomBlock.style.left = dL + "px";
        } else if (midBlocks == 1) {
          leftBlocks += 1;
          rightBlocks -= 1;
          bottomBlock.style.left = dL + "px";
        } else {
          leftBlocks += 1;
          rightBlocks -= 1;
          bottomBlock.style.left = dL + "px";
        }
      } else if (dst == "Middle" && src == "Start") {
        if (midBlocks == 0) {
          midBlocks += 1;
          leftBlocks -= 1;
          bottomBlock.style.left = dM + "px";
        } else if (midBlocks == 1) {
          midBlocks += 1;
          leftBlocks -= 1;
          bottomBlock.style.left = dM + "px";
        } else {
          midBlocks += 1;
          leftBlocks -= 1;
          bottomBlock.style.left = dM + "px";
        }
      } else if (dst == "Middle" && src == "Dst") {
        if (midBlocks == 0) {
          midBlocks += 1;
          rightBlocks -= 1;
          bottomBlock.style.left = dM + "px";
        } else if (midBlocks == 1) {
          midBlocks += 1;
          rightBlocks -= 1;
          bottomBlock.style.left = dM + "px";
        } else {
          midBlocks += 1;
          rightBlocks -= 1;
          bottomBlock.style.left = dM + "px";
        }
      }
    }
    setInterval(function() {
      //tyler
      hanoi(q - 1, aux, src, dst);
    }, 2000);
  }
}
solveForMe.addEventListener("click", function(evt) {
  hanoi(3, "Start", "Middle", "Dst");
});
