# How many words per minute can you type?
![Intro to chimp game](https://cdn.discordapp.com/attachments/501427840873529364/930523892613779547/unknown.png)

## Explanation of the game
The goal of the game is to type the shown text as fast as possible, the faster you type the higher your wpm count will be

## Solution
Due to the browser having security features against simulating direct text input. this is due to all non user inputs sending an isTrusted flag of false. i chose to use puppeteer omit this security feature since it has the ability to input text and clicks however one major drawback is that it has to create a new instance of chromium to work.

## How to use the script
First the packages need to be installed
```
npm i
```
Now the script can be ran with the following command

```
node Typing.js
```
This will open a new chromium tab and play the game for you.

