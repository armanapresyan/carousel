const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");

img1.style.display = "inline";
img2.style.display = "none";
img3.style.display = "none";
img4.style.display = "none";

const imgArr = [img1, img2, img3, img4];

let el = 0;

function showImg1() {
  imgArr[el].style.display = "none";
  if (el === 0) {
    el = imgArr.length;
  }
  imgArr[--el].style.display = "inline";
  console.log(el);
}

function showImg2() {
  imgArr[el].style.display = "none";
  if (el === imgArr.length - 1) {
    el = -1;
  }
  imgArr[++el].style.display = "inline";
  console.log(el);
}

btn1.addEventListener("click", showImg1);
btn2.addEventListener("click", showImg2);

setInterval(function () {
  showImg2();
}, 3000);
 
