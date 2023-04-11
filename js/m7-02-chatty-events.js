// Chatty events
// throttling and debouncing with Lodash

// Mousemowe and Throttle

const coordsOutputRef = document.querySelector(".js-coords");
let mouseMoveCbInvocationCOunter = 0;

// window.addEventListener("mousemove", _.throttle(onMouseMove, 500));

function onMouseMove(evt) {
  mouseMoveCbInvocationCOunter += 1;

  coordsOutputRef.textContent = `
    Quantity of calls onMouseMove: ${mouseMoveCbInvocationCOunter},
    X: ${evt.clientX},
    Y: ${evt.clientY}
    `;
}

//  Input and debounce

const inputRef = document.querySelector(".js-input");
const outputRef = document.querySelector(".js-output");
let inputCbInvocationCounter = 0;

inputRef.addEventListener("input", _.debounce(onInputChange, 300));

function onInputChange(evt) {
  inputCbInvocationCounter += 1;

  outputRef.textContent = `
    Quantity of calls onInputChange: ${inputCbInvocationCounter},
    Value: ${evt.target.value}
    `;
}
