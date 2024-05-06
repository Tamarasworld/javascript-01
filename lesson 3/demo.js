document.getElementById("headingID").innerHTML = "Updated Content";
let headingContent = document.getElementById("headingID").innerHTML;
console.log(headingContent);
document.querySelector(".myheading").innerHTML = "Updated from query";
let headingContent2 = document.querySelector(".myheading").innerHTML;
console.log(headingContent2);

const paragraph = document.createElement("p");
const node = document.createTextNode("This is my text node!");
paragraph.appendChild(node);
let div = document.getElementById("myContainer");
div.appendChild(paragraph);

let allPara = document.getElementsByTagName("p");
// let allParaByClass = document.getElementsByClassName("red");
let allParaByClass = document.querySelectorAll(".red");
console.log(allParaByClass);

function changeText(id) {
  id.innerHTML = "this text has Changed!";
}

function changeColor() {
  let colors = ["green", "red", "pink", "yellow"];
  let random = Math.floor(Math.random() * colors.length);
  console.log(
    "The random number is: " +
      random +
      ", the random color is: " +
      colors[random]
  );
  document.body.style.backgroundColor = colors[random];
}

function changeColorForHeading() {
  document.getElementById("headingID").style.color = "maroon";
}
document.getElementById("changeColor").addEventListener("click", changeColor);

document
  .getElementById("changeColor")
  .addEventListener("click", changeColorForHeading);

function displayDate() {
  document.getElementById("myContainer").innerHTML = Date();
}

document.getElementById("displayDate").addEventListener("click", displayDate);
document.getElementById("time").addEventListener("click", displayTime);

function displayTime() {
  let currentDate = new Date();
  let hours = currentDate.getHours();
  let am = true;

  console.log(hours);
  let minutes = currentDate.getMinutes();

  if (minutes < 10) {
    minutes = "0" + miuntes;
  }
  let currentTime = (hours = ";" + minutes);

  console.log(currentTime);

  if (am) {
    currentTime += " AM";
  } else {
    currentTime += " PM";
  }
  console.log(currentTime);

  document.getElementById("myTime").innerHTML = currentTime;
}

function move() {
  let id = null;
  const elem = document.getElementById("animate");
  let position = 0;
  clearInterval(id);
  id = setInterval(frame, 5);

  function frame() {
    if (position == 350) {
      clearInterval(id);
    } else {
      position++;
      document.getElementById("position").innerHTML = position;
      elem.style.top = position + "px";
      elem.style.left = position + "px";
    }
  }
}
