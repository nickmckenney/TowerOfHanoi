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
