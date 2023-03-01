const counter = document.querySelector('.counter-data');

function increase(){
    let tmp = parseInt(counter.textContent) ;
    counter.innerHTML= (tmp+ 1)
}
function decrease(){
    let tmp = parseInt(counter.textContent) ;
    counter.innerHTML= (tmp - 1)
}
function reset(){
    let tmp = parseInt(counter.textContent) ;
    counter.innerHTML= 0
}
console.log(counter);