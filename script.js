let num = document.querySelector("#num").innerText;
let main = document.querySelector("main");
let btn = document.querySelector("button");
let count = 0;

main.onclick = function () {
  count += 1;
  document.querySelector("#num").innerText = count;
};
btn.onclick = function () {
  document.querySelector("#num").innerText = 0;
  count = 0;
};
