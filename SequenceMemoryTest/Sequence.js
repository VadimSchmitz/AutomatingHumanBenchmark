console.log("Sequence.js");
let sequence = [];
let listening = true;
let sequenceNum = 1;

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

  clicking()
}

//settimeout for 1 second

function clicking(){
  console.log("reaching?")
  console.log(sequence.length>sequenceNum)
  while(sequence.length > sequenceNum){
    console.log("listening")
  }
  setTimeout(() => {
  }, 50);
}

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


