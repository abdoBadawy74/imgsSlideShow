let body = document.body;

let myDiv = document.getElementsByTagName("div")[0];

let imgs = ["./imgs/1.jpg", "./imgs/2.png", "./imgs/3.jpg", "./imgs/4.jpg"];

let myImg = document.querySelector(".myImg");

let counter = 0;

body.style.backgroundColor = "#eee";

myDiv.style.cssText =
  " position:absolute; top: 50%; left:50% ; transform:translate(-50%,-50%);";

myImg.style.cssText = "width:600px; height:400px;";

function slideShow() {
  myImg.setAttribute("src", imgs[counter]);
  counter++;
  if (counter === imgs.length) {
    counter = 0;
  }
  
  setTimeout(() => {
    slideShow();
  }, 2000);
}

slideShow();
