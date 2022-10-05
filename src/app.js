/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { left } from "@popperjs/core";

function wordpicker(array) {
  return array[Math.floor(Math.random() * length)];
}
let whos = ["The dog", "My grandma", "His turtle", "My bird"];
let actions = ["ate", "peed", "crushed", "broke"];
let whats = ["my homework", "the keys", "the car"];
let whens = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

window.onload = function getRandomInt(max) {
  document.getElementById("excuse").innerHTML =
    wordpicker(whos) +
    " " +
    wordpicker(actions) +
    " " +
    wordpicker(whats) +
    " " +
    wordpicker(whens) +
    " ";
  +console.log();
};
