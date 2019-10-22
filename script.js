console.log("TEST");
let blockSetter;
const topBlock = document.querySelector(".topCenterB");
const midBlock = document.querySelector(".midCenterB");
const bottomBlock = document.querySelector(".bottomCenterB");
const leftB = document.querySelector(".leftCenterBlock");
const mid = document.querySelector(".middle");
const rCB = document.querySelector(".rightCenterBlock");

topBlock.addEventListener("click", function(evt) {
  topBlock.style.backgroundColor = "pink";
  blockSetter = topBlock;
});

midBlock.addEventListener("click", function(evt) {
  midBlock.style.backgroundColor = "pink";
  blockSetter = midBlock;
});

bottomBlock.addEventListener("click", function(evt) {
  bottomBlock.style.backgroundColor = "pink";
  blockSetter = bottomBlock;
});

mid.addEventListener("click", function(evt) {
  mid.appendChild(blockSetter);

  blockSetter.style.backgroundColor = "green";
});
rCB.addEventListener("click", function(evt) {
  rCB.appendChild(blockSetter);
  blockSetter.style.backgroundColor = "green";
});
//
leftB.addEventListener("click", function(evt) {
  leftB.appendChild(blockSetter);
  blockSetter.style.backgroundColor = "green";
});
