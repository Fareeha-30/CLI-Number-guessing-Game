#! /usr/bin/env node

import inquirer from "inquirer";

console.log("welcome to code with fareeha CLI number guessing game");

const randomNumber = Math.floor(Math.random() *10 +1);

while(true){
const answer = await inquirer.prompt([
    {
        name: "UserGuessNumber",
        type: "Number",
        message: "Enter your Guess Number(Number limit from 1 to 10):",
    }

]);


if (answer.UserGuessNumber == randomNumber) {
    console.log("Congratulation ! You Guess a correct number.")
    break;}

else {
        console.log("sorry, you guess a wrong number");
    }

    if (randomNumber > answer) {
        console.log("hint number is higher");
    }
    else { console.log("hint number is lower") };

    console.log("game over");
}