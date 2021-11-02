/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  let randomNumber = Math.random() * 10;
  document.querySelector("#the-insult").innerHTML = generateInsult();
  console.log("" * +randomNumber);
};

let generateInsult = () => {
  let subject = ["Yo Mama ", "Yo Auntie ", "Yo grandma "];
  let insult = ["is so fat ", "is so ugly "];
  let reaction = [
    "when she fell I didnt laugh but the sidewalk cracked up.",
    "when she skips a meal, the stock market drops.",
    "it took me two buses and a train to get to her good side.",
    "when she goes camping, the bears hide their food.",
    "I swerved to miss her in my car and ran out of gas.",
    "she was overthrown by a small militia group, and now she is known as the Republic of Yo Mama."
  ];

  let subIndx = Math.floor(Math.random() * subject.length);
  let insultIndx = Math.floor(Math.random() * insult.length);
  let reactionIndx = Math.floor(Math.random() * reaction.length);
  return (
    subject[subIndx] + "" + insult[insultIndx] + "" + reaction[reactionIndx]
  );
};
