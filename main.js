let displayBox = document.querySelector(".display");
//
let list = document.querySelectorAll(".show-display");
//

function showDispaly(event) {
  const x = event.target.innerText;

  if (displayBox.innerHTML == 0) {
    return (displayBox.innerHTML = x);
  }
  return (displayBox.innerHTML += x);
}

//

function keyHandeler(event) {
  const y = event.key;
  if (96 <= event.keyCode && event.keyCode <= 111) {
    if (displayBox.innerHTML == 0) {
      return (displayBox.innerHTML = y);
    }
    return (displayBox.innerHTML += y);
  } else if (48 <= event.keyCode && event.keyCode <= 57) {
    // console.log(event.keyCode);
    if (displayBox.innerHTML == 0) {
      return (displayBox.innerHTML = y);
    }
    return (displayBox.innerHTML += y);
  }
}

window.addEventListener("keydown", keyHandeler);

list.forEach((item) => {
  item.addEventListener("click", showDispaly);
});

//

function calculate() {
  let result = displayBox.innerText;

  displayBox.innerText = eval(result);
}

function calc(event) {
  if (event.keyCode == 13) {
    let result = displayBox.innerText;

    displayBox.innerText = eval(result);
  }
}

function lastClaer(event) {
  if (event.keyCode == 8) {
    let text = displayBox.innerText;
    if (text.length === 1) {
      displayBox.innerText = 0;
    } else {
      displayBox.innerText = text.slice(0, text.length - 1);
    }
  }
}
///

function clear() {
  let text = displayBox.innerText;
  if (text.length === 1) {
    displayBox.innerText = 0;
  } else {
    displayBox.innerText = text.slice(0, text.length - 1);
  }
}

function allClear() {
  displayBox.innerText = 0;
}

function all(event) {
  if (event.keyCode == 65) {
    displayBox.innerText = 0;
  }
}

//

//

function divison(event) {
  if ((event.target.id = "%") && event.keyCode == 68) {
    displayBox.innerText += event.target.id;
  }
}

document.querySelector(".calculate").addEventListener("click", calculate);
document.querySelector(".all-clear").addEventListener("click", allClear);
document.querySelector(".clear-last").addEventListener("click", clear);

window.addEventListener("keydown", all);
window.addEventListener("keydown", divison);
window.addEventListener("keydown", calc);
window.addEventListener("keydown", lastClaer);
