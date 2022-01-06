// ==UserScript==
// @name         Chimp
// @namespace    http://tampermonkey.net/
// @version      1
// @description  this script plays the chimp test flawlessly
// @author       VadimSchmitz
// @match        https://humanbenchmark.com/tests/chimp
// @icon         https://www.google.com/s2/favicons?domain=tampermonkey.net
// @grant        none
// ==/UserScript==

const startButton = document.getElementsByClassName("css-de05nr e19owgy710")[0];
startButton.addEventListener("click", (e) => {
  continueExecution = true;
  setTimeout(() => {
    ClickBoxes()
  }, 1000)
})

function ClickBoxes() {
  holder = []
  parent = document.getElementsByClassName('css-gmuwbf');
  parentsChildren = parent[0].children[0].children;

  let gameloop = 0
  parentsChildren.forEach(element => {
    element.children.forEach(box => {
      holder.push(box)
      if (parseInt(box.getAttribute('data-cellnumber')) > gameloop) {
        gameloop = parseInt(box.getAttribute('data-cellnumber'))
        console.log(box.getAttribute('data-cellnumber'))
      }
    })
  });

  console.log(gameloop)
  for (let i = 0; i < gameloop + 1; i++) {
    holder.forEach(element => {
      if (element.classList.contains('css-19b5rdt') || element.classList.contains('css-10qtjsi')) {
        if (element.getAttribute('data-cellnumber') == i) {
          console.log(element)
          element.click()
        }
      }
    });
  }
}

document.addEventListener('DOMNodeInserted', (e) => {
  if (e.target.innerText == "Continue") {
    console.log(e.target.children[0])

    setTimeout(() => {
      e.target.children[0].click()
      setTimeout(() => {
        ClickBoxes()
      }, 1000)
    }, 50)
  }
})

