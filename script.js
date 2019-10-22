let blockSetter;

let topBlock = document.querySelector(".topCenterB");
let midBlock = document.querySelector(".midCenterB");
let bottomBlock = document.querySelector(".bottomCenterB");
const leftB = document.querySelector(".leftCenterBlock");
const mid = document.querySelector(".middle");
const rCB = document.querySelector(".rightCenterBlock");

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
  console.log("a");
  if (blockInPlay.length == 0) {
  }
});

mid.addEventListener("click", function(evt) {
  // mid.appendChild(blockSetter);
});
rCB.addEventListener("click", function(evt) {});
//
