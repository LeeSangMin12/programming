function sayHello(event){
  console.log("hello");
}

const wraps = document.getElementsByClassName("wrap");

const title = document.getElementById('title');
title.style.backgroundColor = "yellow";

const buttons = document.getElementsByTagName("button");
for(let i=0; i<buttons.length; i++){
  buttons[i].addEventListener("click", sayHello);
}

function changeBackgroundColor(index){
  let card = document.getElementsByClassName("todo-card")[index];
  card.style.backgroundColor = "gray";
}

const new_div = document.createElement("div");
new_div.style.backgroundColor="green";
new_div.style.height="100px";
new_div.style.width="100px";
document.body.appendChild(new_div)

const dogs = ["검은 강아지", "노란 강아지", "흰 강아지"];
const cats = ["검은 강아지", "복슬 고양이", "노란 고양이"];

const answer = dogs.concat(cats);

const set = new Set(answer);
const uniqueArr = [...set];

console.log(uniqueArr);

let date = new Date();
date.toUTCString();
date.getTime();
date.setTime(date.getTime() + 10000);
let a = "hello=aaa; cat=perl;";