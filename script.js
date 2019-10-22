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

// topBlock.addEventListener("click", function(evt) {
//   topBlock.style.backgroundColor = "pink";
//   blockSetter = topBlock;
//   console.log("T");
// });
//
// midBlock.addEventListener("click", function(evt) {
//   midBlock.style.backgroundColor = "pink";
//   blockSetter = midBlock;
//   console.log("MiddleBlock");
// });
// bottomBlock.addEventListener("click", function(evt) {
//   bottomBlock.style.backgroundColor = "pink";
//   blockSetter = bottomBlock;
// });

// ELEMENTS OF CONTAINERS
leftB.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (blockInPlay.length !== 0 || leftB.childElementCount !== 0) {
    if (blockInPlay.length == 0) {
      blockInPlay.push(leftB.lastElementChild);
      leftB.removeChild(leftB.lastElementChild);
    } else {
      leftB.insertBefore(blockInPlay[0], leftB.lastchildElement);
      blockInPlay.pop();
    }
    move += 1;
  }
});

mid.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (blockInPlay.length !== 0 || mid.childElementCount !== 0) {
    if (blockInPlay.length == 0) {
  
//
