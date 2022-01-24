console.log("Sequence.js");
let sequence = [];
let listening = true;
let sequenceNum = 1;

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time)
  });
}

function initField() {
  let squareRow = document.getElementsByClassName('squares')[0].childNodes;
  let squares = [];

  for (let i = 0; i < squareRow.length; i++) {
    for (let j = 0; j < squareRow[i].childNodes.length; j++) {
      squares.push(squareRow[i].children[j]);
    }
  }

  //create mutation listener for each square
  squares.forEach(element => {
    let config = { attributes: true, childList: true, subtree: true };
    const elementCallback = function (mutationsList, elementObserver) {
      if (element.classList.contains('active')) {
        sequence.push(element);
        console.log("sequence", sequence)
      }
    };

    let elementObserver = new MutationObserver(elementCallback);
    elementObserver.observe(element, config);
  });

}

//settimeout for 1 second

function main() {
  console.log('run')

  let mainscreen = document.getElementsByClassName('anim-slide-fade-in')[0];
  const config = { attributes: true, childList: true, subtree: true };

  // Callback function to execute when mutations are observed
  const mainScreenCallback = function (mutationsList, mainScreenObserver) {
    initField()
    mainScreenObserver.disconnect();
  };

  const mainScreenObserver = new MutationObserver(mainScreenCallback);
  mainScreenObserver.observe(mainscreen, config);
}


//onpage load
window.addEventListener('load', function () {
  main()
})

  (async function loop() {
    setTimeout(async function () {
      console.log(sequence.length)
      if (sequence.length >= sequenceNum) {
        sequenceNum++;
        await delay(1000)
        //click all the things in sequence
        sequence.forEach(element => {
          console.log(element)
          element.click();
          console.log("clicks")
        });
        sequence = [];
      }

      loop()
    }, 500); // wait 50ms
  }());
