//
// Delegation of events
// - Common listener
// - Filter of goal click

const container = document.querySelector(".js-container");

container.addEventListener("click", onClick);

function onClick(event) {
  // console.log(event.target.nodeName);
  if (event.target.nodeName !== "BUTTON") {
    return;
  }
  console.log(event.target.textContent);
}

// Code of adding buttons

const addBtn = document.querySelector(".js-add-btn");
let labelCounter = 6;

addBtn.addEventListener("click", onAddBtnClick);

function onAddBtnClick() {
  const btn = document.createElement("button");
  btn.textContent = `Button ${labelCounter}`;
  btn.type = "button";

  container.appendChild(btn);
  labelCounter += 1;
}
