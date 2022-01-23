# The average person can remember 7 numbers at once. Can you do more?
![Intro to Number Memory](https://cdn.discordapp.com/attachments/501427840873529364/934633551712882700/unknown.png)

## Explanation of the game
The goal of the game is to remember the shown sequence of numbers and enter them correctly after the timer runs down

## Solution
Due to the browser having security features against simulating direct text input. this is due to all non user inputs sending an isTrusted flag of false. i chose to use puppeteer omit this security feature since it has the ability to input text and clicks however one major drawback is that it has to create a new instance of chromium to work.

## How to use the script
First the packages need to be installed
```
npm i
```
Now the script can be ran with the following command

```
node NumberMemory.js
```
This will open a new chromium tab and play the game for you.

\
![Working script :)](https://media.discordapp.net/attachments/501427840873529364/934558387172175892/unknown.png?width=707&height=530)