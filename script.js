let blockSetter;

let topBlock = document.querySelector(".topCenterB");
let midBlock = document.querySelector(".midCenterB");
let bottomBlock = document.querySelector(".bottomCenterB");
const leftB = document.querySelector(".leftCenterBlock");
const mid = document.querySelector(".middle");
const rightB = document.querySelector(".rightCenterBlock");
let move = 0;
let arr1 = [];
let arr2 = [];
let arr3 = [];
let blockInPlay = [];
arr1.push(bottomBlock);
arr1.push(midBlock);
arr1.push(topBlock);
let x = leftB.lastElementChild.innerText;
console.log(x);

leftB.addEventListener("click", function(evt) {
  if (blockInPlay.length == 0) {
    console.log("1");
    evt.preventDefault();
    if (blockInPlay.length !== 0 || leftB.childElementCount !== 0) {
      console.log("2");
      if (blockInPlay.length == 0) {
        blockInPlay.push(leftB.lastElementChild);
        leftB.removeChild(leftB.lastElementChild);
      } else {
        leftB.insertBefore(blockInPlay[0], leftB.lastchildElement);
        blockInPlay.pop();
      }
      move += 1;
    }
  } else if (blockInPlay[0].innerText > leftB.lastElementChild.innerText) {
    console.log("1");
    evt.preventDefault();
    if (blockInPlay.length !== 0 || leftB.childElementCount !== 0) {
      console.log("2");
      if (blockInPlay.length == 0) {
        blockInPlay.push(leftB.lastElementChild);
        leftB.removeChild(leftB.lastElementChild);
      } else {
        leftB.insertBefore(blockInPlay[0], leftB.lastchildElement);
        blockInPlay.pop();
      }
      move += 1;
    }
  }
});

mid.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (blockInPlay.length !== 0 || mid.childElementCount !== 0) {
    if (blockInPlay.length == 0) {
      blockInPlay.push(mid.lastElementChild);
      mid.removeChild(mid.lastElementChild);
    } else {
      console.log("TEST");
      mid.insertBefore(blockInPlay[0], mid.lastchildElement);
      blockInPlay.pop();
    }
    move += 1;
  }
  // mid.appendChild(blockSetter);
});
rightB.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (blockInPlay.length !== 0 || rightB.childElementCount !== 0) {
    if (blockInPlay.length == 0) {
      blockInPlay.push(rightB.lastElementChild);
      rightB.removeChild(rightB.lastElementChild);
    } else {
      rightB.insertBefore(blockInPlay[0], rightB.lastchildElement);
      blockInPlay.pop();
    }
    move += 1;
  }
});
//
