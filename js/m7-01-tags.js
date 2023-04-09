// Delegating
// - one of many
// - few of many and Set

const tagsContainer = document.querySelector(".js-tags");

tagsContainer.addEventListener("click", onTagsContainerClick);

function onTagsContainerClick(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }

  console.log(event.target);
}
