console.log("TEST");
// 3 DIV elements for blocks
//NAV bar for difficulty
//3 sticks
//all blocks began in order in DIV 1
//Each block is its own DIV
//
const topBlock = document.querySelector(".topCenterB");
const midBlock = document.querySelector(".midCenterB");
const bottomBlock = document.querySelector(".bottomCenterB");
const mid = document.querySelector(".middle");
const rCB = document.querySelector(".rightCenterBlock");

// const colorField = document.querySelector("#color-field");
// const setColor = document.querySelector("#set-color");
// const brush = document.querySelector(".brush");
// const body = document.querySelector("body");

topBlock.addEventListener("click", function(evt) {
  topBlock.style.backgroundColor = "pink";
});

midBlock.addEventListener("click", function(evt) {
  midBlock.style.backgroundColor = "pink";
});

bottomBlock.addEventListener("click", function(evt) {
  bottomBlock.style.backgroundColor = "pink";
});

mid.addEventListener("click", function(evt) {
  mid.appendChild(topBlock);
  topBlock.style.backgroundColor = "green";
});
