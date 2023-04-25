// select the start game button 
let startButton =document.querySelector(".control-buttons span");
startButton.onclick = function () {
    // Prompt Window To Ask For Name
    let yourName = prompt("Whats Your Name?");
    // if name is empty
    if (yourName == null || yourName == "") {
        // set name to unknown
        let span = document.querySelector(".name span").innerHTML = "Unknown";
    }
    //  name is not empty
    else {
        // set name yourName
        let span1 = document.querySelector(".name span ").innerHTML = yourName;
    }
    //  remove splash screen 
    let remove = document.querySelector(".control-buttons").remove();
    
};
// effect duration 
let duration = 1000;
// select blocks container 
let blocksCount = document.querySelector(".memory-game-blocks");
// create array from game blocks 
let blocks = Array.from(blocksCount.children);
// create range of keys
let orderRange = Array.from(Array(blocks.length).keys());

// console.log(orderRange);
shuffle(orderRange);
// console.log(orderRange);

// Add Order Css Property To Game Blocks
blocks.forEach((block, index)=>{
     // Add CSS Order Property
    block.style.order = orderRange[index];
    // add click event 
    block.addEventListener("click", function () {
        // trigger the flip block function
        flipBlock(block);
    });



});
// flip block function
function flipBlock(selectedBlock) {
    // add class is-flipped
    selectedBlock.classList.add("is-flipped");
            // collect all flipped cards
    let allBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains("is-flipped"));
    // if theres teo selected blocks 
    if (allBlocks.length === 2) {
    //  stop clicking function
    stopClicking();
    // check matched block function
        checkMatchedBlocks(allBlocks[0], allBlocks[1]);
    }

}
// stop clicking function
function stopClicking() {
    // add class no clicking no main container 
    blocksCount.classList.add("no-clicking");
    setTimeout(() => {
        blocksCount.classList.remove("no-clicking");
    }, duration);
};
// checked  matched function 
function checkMatchedBlocks(firstBock,secondBlock) {
    let tries = document.querySelector(".tries span")
    if (firstBock.dataset.technology===secondBlock.dataset.technology) {
        firstBock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');

        firstBock.classList.add("has-match");
        secondBlock.classList.add("has-match");
    }
    else {
        tries.innerHTML = parseInt(tries.innerHTML) + 1;
        setTimeout(() => {
            firstBock.classList.remove('is-flipped');
            secondBlock.classList.remove('is-flipped');
        }, duration);
    }
}
// shuffle function
function shuffle(array) {
    // setting vars
    let current = array.length;
    // console.log(current);
    let temp;
    let random;
    while (current > 0) {
        // get random number
        random = Math.trunc(Math.random() * current)
        // decrease length by one 
        current--;
        // console.log(random);
    // save current element is stash
        temp = array[current];
        // console.log(temp);
    // current element =random element
        array[current] = array[random];
    //  random element =get element form stash 
        array[random] = temp;
    // console.log(temp);
    }
    return array;
};

















































