const counter = document.querySelector(".counter-data");
function valueCheck() {
  let tmp = parseInt(counter.textContent);

  if (tmp > 0) {
    counter.style.color = "Green";
  }else if (tmp<0) {
    counter.style.color= "Red";
  }else counter.style.color="crimson"
}
function increase() {
  let tmp = parseInt(counter.textContent);
  counter.innerHTML = tmp + 1;
  valueCheck();
}
function decrease() {
  let tmp = parseInt(counter.textContent);
  counter.innerHTML = tmp - 1;
  valueCheck();
}
function reset() {
  let tmp = parseInt(counter.textContent);
  counter.innerHTML = 0;
  valueCheck();
}
console.log(counter);
